export const AddPhotoBtn = () =>

`
<div class="user_photo_cont btn_add_container" >

	<button class="btn_add" type="submit">
		<label for="input_id" class="input_label">
			<span class="material-symbols-outlined btn_add_icon">
				add
			</span>
			<br>
			<label id="add_lbl">Añadir foto</label>
		</label>
	</button>
	<input type="file" class="input_file" id="input_id" multiple>
	</input>
</div>
`