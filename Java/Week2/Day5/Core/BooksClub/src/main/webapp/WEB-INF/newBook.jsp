<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- Formatting (dates) -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Spring Boot</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/app.js"></script>
<!-- change to match your file/naming structure -->
</head>
<body>
<div class="container">
<div class="d-flex justify-content-between align-items-center">
	<h1>Add Book To You Shelf!</h1>
	<a href="/books">Back To shelves</a>
</div>

	<form:form action="/books/new" method="post" modelAttribute="book">
	<form:errors path="*" Class="text-danger" />
		<div class="form-group">
			<label>Title:</label>
			<form:input path="title" class="form-control" />
			<form:errors path="title" class="text-danger" />
		</div>
		<div class="form-group">
			<label>Author:</label>
			<form:input path="author" class="form-control" />
			<form:errors path="author" class="text-danger" />
		</div>
		<div class="form-group">
			<label>My Thoughts:</label>
			<form:input path="thoughts" class="form-control" />
			<form:errors path="thoughts" class="text-danger" />
		</div>

		<input type="submit" value="Submit" class="btn btn-primary" />
	</form:form>
	
</div>
</body>
</html>