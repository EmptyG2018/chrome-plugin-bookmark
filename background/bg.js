// 创建右键菜单
chrome.contextMenus.create({type: "normal", contexts: ["page"] , onclick: function(info, tab){	
		// 创建新so选项卡
		chrome.tabs.create({url: "chrome://newtab"})
	}, 
	title: "新建so选项卡" }
)