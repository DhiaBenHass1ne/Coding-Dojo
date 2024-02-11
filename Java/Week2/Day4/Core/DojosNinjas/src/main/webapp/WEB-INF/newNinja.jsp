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
   <div class="container">
	<h1>New Dojo</h1>
	
	<form:form action="/newNinja" method="post" modelAttribute="ninja">
		<form:select path="dojo">
		
        <c:forEach var="oneDojo" items="${dojos}">
        
            <form:option value="${oneDojo.id}" path="dojo">
                <c:out value="${oneDojo.name}"/>
            </form:option>
            
        </c:forEach>
        
    </form:select>
		
		<div class="form-group">
			<label>First Name:</label>
			<form:input path="firstName" class="form-control" />
			<form:errors path="firstName" class="text-danger" />
		</div>
		
		<div class="form-group">
			<label>Last Name:</label>
			<form:input path="lastName" class="form-control" />
			<form:errors path="lastName" class="text-danger" />
		</div>
		
		<div class="form-group">
			<label>Age:</label>
			<form:input type="number" path="age" class="form-control" />
			<form:errors path="age" class="text-danger" />
		</div>
		
		<input type="submit" value="Add Ninja" class="btn btn-primary" />
	</form:form>
</div>
</body>
</html>