<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Spring Boot</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>
  <h1>Welcome, ${username}!</h1> 
  <a href="/logout">Logout</a>
  <a href="/books/new">+ Add to my shelf!</a>
  <p>Books from everyone's shelves:</p>
  <table class="table">
  <thead>
  <tr>
  <th>ID</th>
  <th>Title</th>
  <th>Author Name</th>
  <th>Posted By</th>
  </tr>
  </thead>
  <tbody>
     	<c:forEach var="oneBook" items="${books}">
        <tr>
        	<td>${oneBook.id}</td>
        	<td> <a href="/books/${oneBook.id}">${oneBook.title}</a> </td>
        	<td>${oneBook.author}</td>
        	<td>${oneBook.postedBy.userName}</td>
        </tr>  
        </c:forEach>
  </tbody>
  </table>
</body>
</html>