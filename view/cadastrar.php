<?php include_once("_header.php") ?>

<h4>Cadastro de usuário</h4>
<p>Informe seus dados abaixo.</p>
<div class="input-wrapper">
	<input type="text" name="nome" id="nome" placeholder="Nome" />
</div>
<div class="input-wrapper fa-email">
	<input type="text" name="email" id="email" placeholder="E-mail" />
</div>
<div class="input-wrapper fa-phone">
	<input type="text" name="telefone" id="telefone" placeholder="Telefone" />
</div>
<div class="input-wrapper fa-password">
	<input type="password" name="senha" id="senha" placeholder="Senha" />
</div>
<div class="input-wrapper fa-password">
	<input type="password" name="repetida-senha" id="repetida-senha" placeholder="Repita a senha" />
</div>

<h4>Documentos</h4>
<p>Faça upload dos seus documentos abaixo.</p>
<a href="./">&larr; Voltar</a>
<?php include_once("_footer.php") ?>