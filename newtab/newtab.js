const app = new Vue({
	el: "#app",
	data: {
		bgUrl: "",
		searchText: "",
		currentSearch: localStorage.getItem("search") || "baidu",
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
			fetch("https://cn.bing.com/HPImageArchive.aspx?format=js&idx=1&n=1")
				.then(res => {
					return res.json();
				})
				.then(res => {
					this.bgUrl = `url(https://cn.bing.com${res.images[0].url})`;
				})
				.catch(err => {
					console.log("获取必应壁纸失败，请稍后再试！！！")
				})
		},
		searchItemClick(type) {
			localStorage.setItem("search", type);
			this.currentSearch = type;
		},
		searchClick() {
			let searchText = this.searchText;
			if(!searchText.trim()) return ;
			let url = this.currentSearchObj.url + searchText;
			window.open(encodeURIComponent(url));
		}
	}
})
