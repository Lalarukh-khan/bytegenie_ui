export default function Answer(){
	const handleSubmit = async (event) => {
		event.preventDefault();
		document.getElementById("browse").innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style="padding: 10px; margin: 0px 20px;"></span>`;
		const form = document.querySelector('#ajaxForm');
        const data = new FormData(form);
			const response = await fetch("/question", {
				method: 'POST',
				body:data
			})
			if (response.ok) {
				const data = await response.json();
				document.getElementById("browse").innerHTML = `Compute`;
				const answer = data.message.answer;
				document.getElementById("answer").value = answer;

			}
		else {
			const err = await response.text();
			console.log(err);
			document.getElementById("browse").innerHTML = `Compute`;
		}
	};
	return (
		<div>
			<h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Document /</span> Question-Answer</h4> 
				{/* <input type="hidden" name="id" value="{{$edit->hashid ?? null}}"> */}
				<div className="row reverse_div">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 quater" id="complete_text_dev" style={{display:"block"}}>
						<div className="card radius-15">
							<div className="card-body">
							<div className="card-title" style={{display: "flex", justifyContent: "space-between"}}>
								<h4 className="mb-0">Get The Answer Below</h4>
							</div>
								<hr />
								<form onSubmit={handleSubmit} method="post" id="ajaxForm">
								<div className="row">
									<div className="form-group col-lg-12 col-md-12  mb-2 mt-3">
										<label htmlFor="question">Question</label>
										<input type="text" className="form-control" id="question" name="question"
											required placeholder="Enter the question here"/>
									</div>
									<div className="form-group col-lg-12 col-md-12  mb-2">
										<label htmlFor="context">Context: </label>
										<textarea name="context" className="form-control" cols="30"
											rows="3" placeholder="Enter the context here" required></textarea>
									</div>
									<div className="form-group col-lg-2 col-md-2  mb-2 mt-2">
										<button className="btn btn-info" id="browse" style={{backgroundColor: "#673ab7",borderColor: "#673ab7", marginTop: "30px", color: "#fff"}}>Compute</button>
									</div>
								</div>
								</form>
								<div className="row">
									<div className="col-lg-12 col-md-12  mb-2 mt-5">
										<label htmlFor="answer">Answer: </label>
										<textarea id="answer" className="form-control" cols="30"
											rows="3" readOnly></textarea>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
		</div>
	)
}