var theCobWeb = {
	w_1: {
		w_1_1: {
			w_1_1_1: {
				item: "1"
			},
			w_1_1_2: {
				item: "2"
			},
			w_1_1_3: {
				item: "3"
			}
		},
		w_1_2: {
			w_1_2_1: {
				item: "4"
			},
			w_1_2_2: {
				item: "5"
			},
			w_1_2_3: {
				item: "6"
			}
		},
		w_1_3: {
			w_1_3_1: {
				item: "7"
			},
			w_1_3_2: {
				item: "8"
			},
			w_1_3_3: {
				item: "9"
			}
		}
	}
}

function printIt(web) {

	for (var attr in web) {
		var value = web[attr];

		console.log('value:', value);
		console.log('attr:', attr);
		console.log('web:', web);

		if (typeof value === 'object' && 
			!(Array.isArray(value))) {// web

			printIt(value);
		}
	}
}

printIt(theCobWeb);