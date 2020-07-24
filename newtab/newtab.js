
// 插件信息console
// $(function(){
// 	console.log("%c 名称 %c so ","padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060","padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42C040")
// 	console.log("%c 版本 %c v1.0.0 ","padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060","padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: #1475B2")
// 	console.log("%c 作者 %c EmptyG2018 ","padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060","padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: #2879FF")
// 	console.log("%c Github %c https://github.com/EmptyG2018/so-browser-plugin ","padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060","padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: #E78270;")
// });


// var currentSearch = "baidu";

// var searchEngine = [
// 	{
// 		type: "baidu",
// 		img: "/images/so-baidu.png",
// 		url: "https://www.baidu.com/s?ie=UTF-8&wd="
// 	},
// 	{
// 		type: "google",
// 		img: "/images/so-google.png",
// 		url: "https://www.google.com/search?q=",
// 	},
// 	{
// 		type: "sogou",
// 		img: "/images/so-sogou.png",
// 		url: "https://www.sogou.com/web?ie=utf8&query=",
// 	},
// 	{
// 		type: "360",
// 		img: "/images/so-360.png",
// 		url: "https://www.so.com/s?ie=utf-8&q="
// 	}
// ]


// // 获取必应图片，作为背景图片
// $(function(){
// 	$.ajax({
// 		url: "https://cn.bing.com/HPImageArchive.aspx?format=js&idx=1&n=1",
// 		type: "GET",
// 		dataType: "json",
// 		success: function(data){
// 			var imgurl = data.images[0].url;
// 			$("#bg").css("background-image","url(https://cn.bing.com"+imgurl+")");
// 		},
// 		error: function(){
// 			console.log("获取必应图片失败，请稍后再试！！！");
// 		}
// 	});

// 	function setSearchEngine() {
// 		var searchType = localStorage.getItem("search");
// 		if (searchType) {
// 			var search = searchEngine.filter(search => search.type === searchType)[0];
// 			$(".search .search-class .search-class-val").data('so-active', search.type).children("img").attr("src", search.img);
// 		} else {
// 			localStorage.setItem("search", currentSearch);
// 			setSearchEngine();
// 		}
// 	}
// 	setSearchEngine();
	

// });

// // 空格快捷搜索
// $("#search").keyup(function(e){
// 	if (e.keyCode === 13) {
// 		$("#search_go").trigger("click");
// 	}
// })

// // 根据不同搜索引擎做出不同的跳转
// $("#search_go").on("click", function(){
// 	var so_active = $(".search .search-class .search-class-val").data('so-active');
// 	var url = "";
// 	var val = $("#search").val();
// 	if (!$.trim(val)) return ;
// 	switch(so_active) {
// 		case 'baidu':
// 			url = "https://www.baidu.com/s?ie=UTF-8&wd="+val;
// 			break;
// 		case 'google':
// 			url = "https://www.google.com/search?q="+val;
// 			break;
// 		case 'sogou':
// 			url = "https://www.sogou.com/web?ie=utf8&query="+val;
// 			break;
// 		case 360:
// 			url = "https://www.so.com/s?ie=utf-8&q="+val;
// 			break;
// 	}
// 	window.open(url);
// })

// // 切换不同搜索引擎
// $(".search .search-class .search-class-dropbox").on("click",".search-class-dropbox-content .item", function(){
// 	var search_class_val = $(".search .search-class .search-class-val");
// 	var so_item = $(this).data('so-item');
// 	switch (so_item) {
// 		case 'baidu':
// 			search_class_val.children("img").attr("src", "/images/so-baidu.png");
// 			break;
// 		case 'google':
// 			search_class_val.children("img").attr("src", "/images/so-google.png");
// 			break;
// 		case 'sogou':
// 			search_class_val.children("img").attr("src", "/images/so-sogou.png");
// 			break;
// 		case 360:
// 			search_class_val.children("img").attr("src", "/images/so-360.png");
// 			break;
// 	}
// 	search_class_val.data('so-active', so_item);
// })


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
			window.open(url);
		}
	}
})
