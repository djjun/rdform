(function( $ ){

	$.fn.rdform = function(_data) {

		var vm = this,
			opt = options,
			fields = [];

		if(!!opt.fields){
			var key,
				count = 0;

			for(key in opt.fields) {

				if(opt.fields[key].length > 0){
					var opts = [];

					for(options in opt.fields[key]){
						opts.push(
							[
							'<option value="'+ opt.fields[key][options] +'">',
								opt.fields[key][options],
							'</option>'
							].join('')
						);
					}

					fields.push(
						[
							'<label for='+ key +'>'+ key +'</label>',
							'<select name="' + key + '" id="'+ key +'" class="form-control">',
							opts.join(''),
							'</select>'
						].join('')
					);
				}
				count++;
			}
		}

		function templateForm() {
			return [
				'<form method="POST" action="" id="rdform">',
				'	<div class="control-group">',
				'		<label>Nome</label>',
				'		<div class="controls">',
				'			<input name="nome" type="text" class="form-control" required placeholder="Digite seu nome completo">',
				'		</div>',
				'	</div>',
				'	<div class="control-group">',
				'		<label>E-mail</label>',
				'		<div class="controls">',
				'			<input name="email" type="email" class="form-control" required placeholder="Digite seu email">',
				'		</div>',
				'	</div>',
				fields.join(''),
				'	<div class="text-right" style="margin-top: 20px">',
				'		<input type="submit" class="btn btn-primary btn-send-rdform" value="Enviar">',
				'	</div>',
				'</form>',
				'<div class="add-alert" style="margin-top: 20px"></div>'
			].join('');
		}

		function templateModal() {
			return [
				'<div id="rdform-modal" class="modal fade" tabindex="-1" role="dialog">',
				'	<div class="modal-dialog" role="document">',
				'		<div class="modal-content">',
				'			<div class="modal-header">',
				'				<button type="button" class="close" data-dismiss="modal" aria-label="Fechar"><span aria-hidden="true">&times;</span></button>',
				'				<h4 class="modal-title">Cadastre-se e receba notícias</h4>',
				'			</div>',
				'			<div class="modal-body">',
				templateForm(),
				'			</div>',
				'		</div>',
				'	</div>',
				'</div>'
			].join('');
		}

		$( vm[0] ).click(function() {
			$('.alert-rdform').remove();
			if(!!opt.modal){
				$( templateModal() ).insertAfter( vm[0] );
				$('#rdform-modal').modal('show');
			} else{
				$( templateForm() ).insertAfter( vm[0] );
			}

			$("#rdform").submit(function(e){

				// Todos os inputs
				var $inputs = $('#rdform :input');

				// foreach nos inputs
				var _data = {};
				$inputs.each(function() {
					if(this.type === 'submit') return;
					_data[this.name] = $(this).val();
				});

				$.ajax({
					url: 'http://localhost:8080/send', //URL PADRAO DO SERVIDOR
					crossDomain: true,
					data: JSON.stringify(_data),
					dataType: 'json',
					type: 'POST',
					success: function(data) {
						$('.add-alert').append(
						'<div class="alert-rdform alert alert-success" role="alert">'+ data.message +'</div>'
						);
					},
					error: function(err){
						$('.add-alert').append(
							'<div class="alert-rdform alert alert-danger" role="alert">Ocorreu algum problema. Tente novamente!</div>'
						);
					}
				});
				return false;
			});
		});
	}
})( jQuery );