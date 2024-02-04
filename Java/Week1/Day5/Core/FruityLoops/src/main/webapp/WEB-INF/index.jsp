<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h1>Fruits Store</h1>
<table>
<thead>
<tr>
<th>Name</th>
<th>Price</th>
</tr>
</thead>
<tbody>
<c:forEach var="oneFruit" items="${fruitsList}">
	<tr>
		<td>${oneFruit.name}</td>
		<td>${oneFruit.price}</td>
	</tr>
</c:forEach>
</tbody>
</table>
</body>
</html>
