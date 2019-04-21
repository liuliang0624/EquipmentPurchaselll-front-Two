/**
 * 文件上传工具
 *
 * @author 张远志
 * @time 2017年4月28日14:21:58
 */
let {uploadUrl} = require('yylib-business/attach/attachaction');
let AuthToken = require("yylib-utils/AuthToken");

/**
 * 文件上传
 *
 * @param datas
 * @param url
 * @param callback
 */
export function upload(datas, url, callback) {
    let file = document.createElement("input");
    file.setAttribute("type", "file");
    document.body.appendChild(file);
    file.onchange = doUpload;
    file.click();

    function doUpload() {
        let form = new FormData();
        form.append("file", file.files[0]);
        for (let key in datas) {
            form.append(key, datas[key]);
        }
        let xhr = new XMLHttpRequest();
        xhr.open("post", url, true);
        xhr.setRequestHeader("authority", AuthToken.getAuthenticationStr());
        xhr.setRequestHeader("icop-token", AuthToken.getToken());
        xhr.onload = uploadComplete;
        xhr.onerror = uploadFailed;
        xhr.send(form);
    }

    function uploadComplete(event) {
        document.body.removeChild(file);
        let back = event.currentTarget.response;
        callback(JSON.parse(back));
    }

    function uploadFailed() {
        document.body.removeChild(file);
    }
}

/**
 * 上传到文件服务器
 *
 * @param datas
 * @param serverUrl
 * @param callback
 */
export function uploadToFs(datas, serverUrl, callback) {
    upload(datas, serverUrl + uploadUrl, callback);
}
