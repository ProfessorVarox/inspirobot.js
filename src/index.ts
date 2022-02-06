import axios from "axios";
const baseUrl = "https://inspirobot.me/api?";

async function _get(endpoint: string): Promise<any> {
    return await axios.get(baseUrl + endpoint, {
        headers: {
            "User-Agent": "InspiroBotJS"
        }
    }).then(res => {
        return res.data;
    }).catch(err => {
        throw err;
    });
}

/**
 * Generates an image with a quote
 * @constructor
 * @return {Promise<string>} The link to image (.jpg)
 */
export async function generateImage() {
    return new Promise<string>((resolve, reject) => {
        _get("generate=true").then(res => resolve(res)).catch((err: any) => reject(err));
    });
}

/**
 * A class for streaming mindfulness mode using consistent session IDs
 */
export class FlowClient {
    private sessionId = "";

    private async _createSessionId(): Promise<void> {
        await _get("getSessionID=1").then(r => {
            if (r) this.sessionId = r;
        });
    }

    /**
     * Generates a new mindfulness stream
     * @param {Object=} options - Optional options
     * @param {boolean=} options.newSessionId - Force creation of a new session ID (default to false)
     * @return {Promise<Flow>} A object containing quotes, text and a mp3 stream URL
     */
    public async generateFlow(options?: {newSessionId?: boolean}): Promise<Flow> {
        if (options?.newSessionId || !this.sessionId) await this._createSessionId();
        return new Promise((resolve, reject) => {
            _get("generateFlow=1&sessionID=" + this.sessionId).then((r: Flow) => {
                r.sessionId = this.sessionId;
                resolve(r);
            }).catch(err => reject(err));
        });
    }
}

export interface Flow {
    "data": DataType[],
    "mp3": string,
    "sessionId": string
}

export interface DataType {
    "duration"?: number,
    "image"?: string,
    "text"?: string
    "type": "transition" | "quote" | "stop",
    "time": 0
}
