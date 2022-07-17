function Description({item}) {
	return (
		<div className='description'>
			<h1>Description</h1>
			<table>
				<tbody>
					<tr>
						<th>Brand</th>
						<td>{item.brand}</td>
					</tr>
					<tr>
						<th>Model</th>
						<td>{item.model}</td>
					</tr>
					<tr>
						<th>Price</th>
						<td>{item.price + ' $'}</td>
					</tr>
					<tr>
						<th>CPU</th>
						<td>{item.cpu}</td>
					</tr>
					<tr>
						<th>RAM</th>
						<td>{item.ram}</td>
					</tr>
					<tr>
						<th>OS</th>
						<td>{item.os}</td>
					</tr>
					<tr>
						<th> Display Resoulution</th>
						<td>{item.displayResolution}</td>
					</tr>
					<tr>
						<th> Battery</th>
						<td>{item.battery}</td>
					</tr>
					<tr>
						<th> Primary Camera</th>
						<td>{item.primaryCamera}</td>
					</tr>
					<tr>
						<th> Secondary Camera</th>
						<td>{item.secondaryCmera}</td>
					</tr>
					<tr>
						<th> Dimentions</th>
						<td>{item.dimentions}</td>
					</tr>
					<tr>
						<th> Weight</th>
						<td>{item.weight}</td>
					</tr>
				</tbody>
			</table>
		</div>
	  );
}

export default Description