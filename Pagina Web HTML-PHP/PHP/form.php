<div id="form">
    <form method="POST" action="../PHP/conection.php" id="formulario">
        <h5>Rellena el formulario para recibir más información:</h5>
        <label for="name">Nombre: </label>
        <input type="text" id="name" name="name"><br>
        <label for="phone">Teléfono: </label>
        <input type="string" id="phone" name="phone" required><br>
        <label for="lang">Localización: </label>
        <select id="model" name="localidad">
            <option value="Madrid">Madrid</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Valencia">Valencia</option>
            <option value="Granada">Granada</option>
            <option value="País Vasco">País Vasco</option>
        </select><br>
        <button type="submit" value="Enviar">Envíar</button>
    </form>

</div>