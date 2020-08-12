let contextMenus = {
	add: {
		type: "normal",
		title: "新建纸飞机",
		contexts: ["page"],
		onclick () {
			chrome.tabs.create({url: "chrome://newtab"});
		}
	},
	bookmarks: {
		type: "normal",
		title: "书签",
		contexts: ["browser_action"],
		onclick () {
			chrome.tabs.create({ url: "bookmark/bookmark.html" })
		}
	}
	
}

console.log(chrome.runtime);

// 创建 页面右键 新增纸飞机
chrome.contextMenus.create(contextMenus.add)
// 创建 扩展右键 书签
chrome.contextMenus.create(contextMenus.bookmarks)