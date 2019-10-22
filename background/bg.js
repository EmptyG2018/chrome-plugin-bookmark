

// 创建右键菜单
chrome.contextMenus.create({type: "normal", contexts: ["page"] , onclick: function(info, tab){
		console.log(info); console.log(tab)
		
		// 创建新so选项卡
		chrome.tabs.create({url: "chrome://newtab"},function(){
			console.log("创建新so选项卡成功");
		})
	}, 
	title: "新建so选项卡" }, function(){
		console.log("创建右键菜单成功");
	}
)