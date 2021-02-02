export default{
    formatDateYMD(str) {// 2020-05-11T16:00:02.000+0000转YYMMDD
        let date_ = new Date(str)
        let y = date_.getFullYear();
        let m = date_.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        let d = date_.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date_.getHours();
        let minute = date_.getMinutes();
        minute = minute < 10 ? ('0' + minute) : minute;
        return y + '-' + m + '-' + d
    },
    formatDateYMDHS(str) {// 2020-05-11T16:00:02.000+0000转YYMMDD
        let date_ = new Date(str)
        let y = date_.getFullYear();
        let m = date_.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        let d = date_.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date_.getHours();
        let minute = date_.getMinutes();
        minute = minute < 10 ? ('0' + minute) : minute;
        return y + '-' + m + '-' + d+ '  ' + h  + ':' + minute
    },
}