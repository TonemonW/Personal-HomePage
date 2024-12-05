// 下面是封装的消息提示的实现
type msgQueue = {
	id: number;
	content: string;
	type: string;
};

export default class MsgShow {
	private msgQueue: msgQueue[];
	private index: number;
	private container: HTMLElement | null;
	private aliveTime: number;

	constructor(container: HTMLElement | null, time: number) {
		this.msgQueue = []; //
		this.index = 0;
		this.container = container;
		this.aliveTime = time;
	}

	showMsg(content: string, type: string) {
		if (!this.container) {
			throw new Error("please check weather container is defined!");
		}
		type = type || "info"; //
		const msg = {
			id: this.index,
			content,
			type,
		};
		this.msgQueue.push(msg); //
		++this.index;
		this.displayMsg(msg); //
	}

	private displayMsg(msg: msgQueue) {
		const span = document.createElement("span");
		span.classList.add("msg-basic", `msg-${msg.type}`);
		span.setAttribute("id", msg.id.toString());
		span.innerHTML = msg.content;
		this.container!.appendChild(span);
		setTimeout(() => {
			let element = document.getElementById(msg.id.toString());
			if (element) {
				this.container!.removeChild(element);
			}
			this.msgQueue.shift(); //
		}, this.aliveTime + 20);
	}
}
