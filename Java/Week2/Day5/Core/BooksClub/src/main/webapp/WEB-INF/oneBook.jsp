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
	<div class="d-flex justify-content-between align-items-center">
		<h1>${book.title}</h1>
		<a href="/books">Back To shelves</a>
	</div>
	<c:if test="${user_id == book.postedBy.id}">
		<h3>You read ${book.title} by ${book.author}.</h3>
		<h3>Here are your thoughts:</h3>
	</c:if>
	<c:if test="${user_id != book.postedBy.id}">
		<h3>${book.postedBy.userName}read ${book.title} by
			${book.author}.</h3>
		<h3>Here are ${book.postedBy.userName}'s thoughts:</h3>
	</c:if>
	<hr />
	<p>${book.thoughts}</p>
	<hr />
	<c:if test="${user_id == book.postedBy.id}">
		<div class="d-flex">
			<a href="/books/edit/${book.id}"><button class="btn btn-warning">Edit</button></a>
			<form action="/books/${book.id}" method="post">
				<input type="hidden" name="_method" value="delete"> <input
					class="btn btn-danger" type="submit" value="Delete">
			</form>
		</div>

	</c:if>
</body>
</html>