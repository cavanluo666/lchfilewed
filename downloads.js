/* ============================================================
   lch收发助手 · 下载链接数据（唯一数据源）
   ------------------------------------------------------------
   官网首页与「获取软件」下载页都读取本文件。
   以后更换网盘地址或提取码，只需要改下面的数组，两个页面同时生效。

   字段说明：
     icon  卡片图标（Emoji）
     name  名称
     note  一行说明
     url   网盘地址（必填；留空的卡片不会显示）
     code  提取码（可选；填了会显示「提取码」复制按钮）

   注意：本文件必须与 index.html、download.html 放在同一目录。
   ============================================================ */
window.LCH_DOWNLOADS = [
  {
    icon: "📦",
    name: "服务端部署包",
    note: "lch收发助手服务端 · 需密码访问",
    url: "https://cavan.lanzout.com/b0067atitg",
    code: "andc"
  },
  {
    icon: "💻",
    name: "桌面客户端",
    note: "lch收发助手客户端 · 123云盘不限速",
    url: "https://1813271333.share.123pan.cn/123pan/euaUVv-zV6sd?pwd=IMg2#",
    code: "IMg2"
  },
  {
    icon: "🗜️",
    name: "解压缩软件",
    note: "用于解压部署包与客户端 · 需密码访问",
    url: "https://cavan.lanzout.com/iQNGw4agrx7i",
    code: "4bi4"
  }
];
