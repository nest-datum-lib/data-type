
const callerFunc = function () {
	const stack = String((new Error()).stack);
	const stackSplit = stack.split("\n");
	let stackCaller = stackSplit[3];

	if (utilsCheckStrFilled(stackCaller) && stackCaller.includes('(file:///')) {
		return ((stackCaller.split('(file:///')[1] || '').split(':')[0] || '').trim();
	}
	return '';
};

export default callerFunc;
