const app = new Vue({
	el: "#app",
	data: {
		// 书签模拟数据
		    bookmarks: [
			{ id: 1, tit: "百度一下，你就知道", url: "https://www.baidu.com" },
			{ id: 2, tit: "element_百度搜索", url: "https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&tn=baidu&wd=element&oq=z-index%25E6%259C%2580%25E5%25A4%25A7%25E5%2580%25BC&rsv_pq=981e49a300031cab&rsv_t=584eRSLJaGWBqIIjQjUHhTHRRpzozzLanFEqbjIicrW%2B97BJ%2FYHLE5trmFY&rqlang=cn&rsv_enter=1&rsv_dl=ts_0&rsv_sug3=5&rsv_sug1=5&rsv_sug7=100&rsv_sug2=0&rsv_btype=t&prefixsug=elem&rsp=0&inputT=2955&rsv_sug4=2956" },
			{ id: 3, tit: "京东(JD.COM)-正品低价、品质保障、配送及时、轻松购物！", url: "https://www.jd.com/" },
			{ id: 4, tit: "组件 | Element", url: "https://element.eleme.cn/#/zh-CN/component/typography" },
			{ id: 5, tit: "天猫tmall.com--理想生活上天猫", url: "https://www.tmall.com/" },
			{ id: 6, tit: "腾讯首页", url: "https://www.qq.com/" }
		]
	}
});