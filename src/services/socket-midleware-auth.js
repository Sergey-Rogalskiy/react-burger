import { 
    WS_CONNECTION_AUTH_START,
    WS_CONNECTION_AUTH_SUCCESS,
    WS_CONNECTION_AUTH_ERROR,
    WS_CONNECTION_AUTH_CLOSED,
    WS_GET_MESSAGE_AUTH,
    WS_SEND_MESSAGE_AUTH,
} from "./actions/feed"
import { getCookie } from "./utils";

export const socketMiddlewareAuth = () => {
    return store => {
        let socket = null;

        return next => action => {
            const { dispatch } = store;
            const { type, payload } = action;
            const token = getCookie('accessToken');
            if (type === WS_CONNECTION_AUTH_START) {
                const wsUrl =  'wss://norma.nomoreparties.space/orders'
                socket = new WebSocket(`${wsUrl}?token=${token}`);
            }
            if (socket) {
                socket.onopen = event => {
                dispatch({ type: WS_CONNECTION_AUTH_SUCCESS, payload: event });
            };

            socket.onerror = event => {
                dispatch({ type: WS_CONNECTION_AUTH_ERROR, payload: event });
            };

            socket.onmessage = event => {
                const { data } = event;
                const parsedData = JSON.parse(data);
                const { success, ...restParsedData } = parsedData;

                dispatch({ type: WS_GET_MESSAGE_AUTH, payload: restParsedData });
            };

            socket.onclose = event => {
                dispatch({ type: WS_CONNECTION_AUTH_CLOSED, payload: event });
            };

            if (type === WS_SEND_MESSAGE_AUTH) {
                const message = { ...payload };
                socket.send(JSON.stringify(message));
            }
            }

            next(action);
        };
    };
};
