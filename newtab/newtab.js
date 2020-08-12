const app = new Vue({
	el: "#app",
	data: {
		searchText: "",
		currentBgUrl: "",
		currentSearch: localStorage.getItem("search") || "baidu",
		toggleSave: localStorage.getItem("toggleSave") === "true" ? true : false ,
		dayUpdateBg: localStorage.getItem("dayUpdateBg") === "true" ? true : false,
		bgUrl: localStorage.getItem("bgUrl") || "",
		bgOverlayOpa: isNaN(localStorage.getItem("bgOverlayOpa") * 1) ? 20 : localStorage.getItem("bgOverlayOpa") * 1,
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
		]
	},
	computed: {
		currentBgUrlCss () {
			return `url(${this.currentBgUrl})`;
		},
		overlayBgColor() {
			let bgOverlayOpa = this.bgOverlayOpa * 1 / 100;
			return `rgba(255, 255, 255, ${bgOverlayOpa})`;
		},
		currentSearchObj () {
			return this.searchEngine.filter(search => search.type === this.currentSearch)[0];
		}
	},
	created() {
		this.version();
		this.getBg();
	},
	methods: {
		version() {
			console.log("%c 名称 %c so ","padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060","padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42C040")
			console.log("%c 版本 %c v1.0.0 ","padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060","padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: #1475B2")
			console.log("%c 作者 %c EmptyG2018 ","padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060","padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: #2879FF")
			console.log("%c Github %c https://github.com/EmptyG2018/so-browser-plugin ","padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060","padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: #E78270;")			
		},
		getBg() {
			if (this.dayUpdateBg) {
				fetch("https://cn.bing.com/HPImageArchive.aspx?format=js&idx=1&n=1")
				.then(res => {
					return res.json();
				})
				.then(res => {
					this.currentBgUrl = `https://cn.bing.com${res.images[0].url}`;
				})
				.catch(err => {
					console.log("获取必应壁纸失败，请稍后再试！！！")
				})
			} else {
				if (this.bgUrl) {
					this.currentBgUrl = this.bgUrl;
				} else {
					this.currentBgUrl = "https://cn.bing.com/th?id=OHR.SeaFireflies_ZH-CN5748822339_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp";
				}
			}
		},
		searchItemClick(type) {
			if (this.toggleSave)
			localStorage.setItem("search", type);
			this.currentSearch = type;
		},
		searchClick() {
			let searchText = this.searchText;
			if(!searchText.trim()) return ;
			let url = this.currentSearchObj.url + encodeURIComponent(searchText);
			window.open(url);
		}
	}
})
