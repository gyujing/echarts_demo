export interface menuItem {
    //图标
    icon?: string,
    //转化后的图标
    i?:any,
    // 标题
    name:string,
    // 标识
    index:string,
    // 子级
    children?:menuItem[]
}