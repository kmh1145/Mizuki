// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Apple: [
		{
			name: "iPhone 15 pro",
			image: "/images/device/iphone_15_pro.png",
			specs: "钛原色 / 8G + 256GB",
			description:
				"Apple A17 Pro芯片，支持ProMotion自适应刷新率，拍照和视频性能提升。",
			link: "https://support.apple.com/zh-cn/111829",
		},
		{
			name: "iPhone 8 Plus",
			image: "/images/device/iphone8plus-2018.png",
			specs: "金色 / 3G + 256GB",
			description: "A11仿生芯片，支持无线充电和快速充电，经典的设计。",
			link: "https://support.apple.com/zh-cn/111950",
		},
		{
			name: "iPad Air 3",
			image: "/images/device/ipad-air-2019.jpg",
			specs: "深空灰色 / 3G + 64GB",
			description:
				"A12芯片，支持Apple Pencil（第一代），适合学习和娱乐。",
			link: "https://support.apple.com/zh-cn/111939",
		},
		{
			name: "iPad mini 2",
			image: "/images/device/ipad-mini-2.jpg",
			specs: "深空灰色 / 2G + 32GB",
			description: "A7芯片，紧凑便携，适合阅读和轻度使用。",
			link: "https://support.apple.com/zh-cn/112019",
		},
		{
			name: "Apple Watch SE（第 1 代）",
			image: "/images/device/apple-watch-se-580.png",
			specs: "深空灰色 / GPS + 蜂窝网络 / 44毫米",
			description: "搭载S5 SiP芯片，具备心率监测、跌倒检测等健康功能。",
			link: "https://support.apple.com/zh-cn/111862",
		},
		{
			name: "Apple Watch S3",
			image: "/images/device/applewatchseries3.png",
			specs: "深空灰色 / GPS / 42毫米",
			description: "搭载S3 SiP芯片，具备心率监测、跌倒检测等健康功能。",
			link: "https://support.apple.com/zh-cn/111891",
		},
		{
			name: "AirPods Pro 3",
			image: "/images/device/airpods_pro_3.jpg",
			specs: "白色 / MagSafe充电盒",
			description: "支持空间音频和自适应均衡，提供出色的音质和降噪效果。",
			link: "https://www.apple.com.cn/airpods-pro/specs/",
		},
		{
			name: "MacBook Pro 13 英寸 2017 四个Thunderbolt 3",
			image: "/images/device/MacBook-Pro-2017.jpeg",
			specs: "深空灰色 / 8G + 256GB",
			description:
				"第七代双核Intel Core i5处理器，配备Touch Bar和Touch ID。",
			link: "https://support.apple.com/zh-cn/111972",
		},
	],
	耳机: [
		{
			name: "AirPods Pro 3",
			image: "/images/device/airpods_pro_3.jpg",
			specs: "白色 / MagSafe充电盒",
			description: "支持空间音频和自适应均衡，提供出色的音质和降噪效果。",
			link: "https://www.apple.com.cn/airpods-pro/specs/",
		},
		{
			name: "华为 FreeBuds Pro",
			image: "/images/device/FreeBuds-Pro.png",
			specs: "银色",
			description: "主动降噪，智能佩戴检测，支持无线充电和快速充电。",
			link: "https://www.vmall.com/product/10086423516293.html",
		},
		{
			name: "WF-1000XM4",
			image: "/images/device/wf_1000xm4.jpg",
			specs: "银色",
			description: "主动降噪，智能佩戴检测，支持无线充电和快速充电。",
			link: "https://www.sonystyle.com.cn/products/headphone/wf_1000xm4/wf_1000xm4_n.html?fromfeature=tab-detail-params&prior=feature",
		},
	],
};
