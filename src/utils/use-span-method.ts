/**
 * 合并相同数据，导出合并列所需的方法
 * @param {Object} data
 * @param {Object} rowspanArray
 */
export function getRowSpanMethod(projectInfo:any, rowSpanArray:any) {
	//要合并列的数据
	const rowSpanNumObject :any = {}
	//初始化 rowSpanNumObject 
	rowSpanArray.map((item:any) => {
		rowSpanNumObject[item] = new Array(projectInfo.length).fill(1, 0, 1).fill(0, 1)
		rowSpanNumObject[`${item}-index`] = 0
	})
	//计算相关的合并信息
	for (let i = 1; i < projectInfo.length; i++) {
		rowSpanArray.map((key:any) => {
			const index = rowSpanNumObject[`${key}-index`]
			if (projectInfo[i][key] === projectInfo[i - 1][key]) {
				rowSpanNumObject[key][index]++
			} else {
				rowSpanNumObject[`${key}-index`] = i
				rowSpanNumObject[key][i] = 1
			}
		})
	}
	//提供合并的方法并导出
	const spanMethod = function({ row, column, rowIndex, columnIndex }:any) {
		if (rowSpanArray.includes(column['property'])) {
			const rowspan = rowSpanNumObject[column['property']][rowIndex]
			if (rowspan > 0) {
				return { rowspan: rowspan, colspan: 1 }
			}
			return { rowspan: 0, colspan: 0 }
		}
		return { rowspan: 1, colspan: 1 }
	};
	return spanMethod
}

