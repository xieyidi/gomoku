<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<link rel="stylesheet" type="text/css" href="css/main.css">

  </head>
  
  <body>
    <canvas class='bg2'></canvas>
    <canvas class='bg1'></canvas>
    <button class='replay' id='replay'>重 玩</button>
    <button class='restep' id='restep'>悔 棋</button>
    <script type="text/javascript" src="js/draw.js"></script>
    <script type="text/javascript" src="js/judge.js"></script>
  </body>
</html>
