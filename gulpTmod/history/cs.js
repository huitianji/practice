$.ajax({
    url:"",
    type:'post',
    data:'name=ZXCVB',
    timeout:15000,
    beforeSend:function(XMLHttpRequest) {
        //alert('远程调用开始...');
        $("#loading").html("<img src='/jqueryStu/images/loading.gif' />");
    },
    success:function () {
        $("#loading").empty();
    },
    error:function () {

    }
});