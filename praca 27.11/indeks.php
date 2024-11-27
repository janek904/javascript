<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css.css">
</head>
<body>
    <form action="indeks.php" method="post">
    <table>
<tr>
    <td><label for="pesel">PESEL</label></td>
    <td><input type="text" id="pesel"></td>
</tr>
    
<tr>
    <td><label for="Imie">Imię </label></td>
    <td><input type="text" id="Imie"></td>
</tr>
    
<tr>
    <td><label for="Nazwisko">Nazwisko </label></td>
    <td><input type="text" id="Nazwisko"></td>
</tr>  
<tr> 
<td colspan="2">
    <fieldset>

    <legend>Kolor oczu</legend>
    <input type="radio" id="niebieskie" name="kolor" value="niebieskie">
    <label id="niebieskie">niebieskie</label>
    <br>
    <input type="radio" id="zielone" name="kolor" value="zielone">
    <label id="zielone">zielone</label>
    <br>
    <input type="radio" id="piwne" name="kolor" value="piwne">
    <label id="piwne">piwne</label> 
</fieldset>
</td>
</tr> 
<tr>
<td colspan ='2' id="dwa"><button >Zapisz</button></td>


</tr>
</table>
    <script src="javascirpt1.js"></script>


</body>
</html>