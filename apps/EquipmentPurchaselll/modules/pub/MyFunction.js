
//自定义页面渲染方法，解析招标方式为对应汉字
export function tenderMethodHanhua(a) {
    if (a == "openTender") {
        return "公开招标";
    }
    else if (a == "InvitationTender") {
        return "邀请招标";
    }
    else if (a == "negotiation") {
        return "竞争性谈判"
    }
    else {
        return a;
    }
}


//自定义页面渲染方法，解析招标方式为对应汉字
export function rentalMethodHanhua(a) {
    if (a == "Method-01") {
        return "内部租赁";
    }
    else if (a == "Method-02") {
        return "外部租赁";
    }
    else {
        return a;
    }
}