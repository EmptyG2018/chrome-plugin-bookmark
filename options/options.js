function getStorage(key) {
	return localStorage.getItem(key);
}
function setStorage(key, val) {
	localStorage.setItem(key, val);
}

new Vue({
	el: "#app",
	data: {
		searchEngine: [
			{
				type: "baidu",
				tit: "百度",
				img: "/images/so-baidu.png",
				url: "https://www.baidu.com/s?ie=UTF-8&wd="
			},
			{
				type: "google",
				tit: "Google",
				img: "/images/so-google.png",
				url: "https://www.google.com/search?q=",
			},
			{
				type: "sogou",
				tit: "搜狗",
				img: "/images/so-sogou.png",
				url: "https://www.sogou.com/web?ie=utf8&query=",
			},
			{
				type: "360",
				tit: "360",
				img: "/images/so-360.png",
				url: "https://www.so.com/s?ie=utf-8&q="
			}
		],
		settings: {
			search: getStorage("search") || "baidu",
			toggleSave: getStorage("toggleSave") === "true" ? true : false,
			dayUpdateBg: getStorage("dayUpdateBg") === "true" ? true : false,
			bgUrl: getStorage("bgUrl") || "",
			bgOverlayOpa: isNaN(getStorage("bgOverlayOpa") * 1) ? 20 : getStorage("bgOverlayOpa") * 1,	
		}
	},
	computed: {
		overlayBgColor() {
			let bgOverlayOpa = this.bgOverlayOpa / 100;
			return `rgba(255, 255, 255, ${bgOverlayOpa})`;
		}
	},
	methods: {
		handleSearchChange(val) {
			setStorage("search", val);
		},
		handleToggleSaveChange(val) {
			setStorage("toggleSave", val);
		},
		handleDayUpdateBgChange(val) {
			setStorage("dayUpdateBg", val);
		},
		handleBgUrlChange(val) {
			setStorage("bgUrl", val);
		},
		handleBgOverlayOpaChange(val) {
			setStorage("bgOverlayOpa", val);
		}
	}
})