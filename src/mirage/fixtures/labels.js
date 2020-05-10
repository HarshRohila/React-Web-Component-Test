const FLOOR_1_ID = "ed3c25b3-f9ac-46c8-a964-98602ea953c9";
const FLOOR_3_ID = "2d58530d-1a0d-4db5-81cc-cf377659279c";
const url = 'https://api-trimble-engage-qa.trimble-app.us/qa/floors/';

export default [
    {
		"id": "1",
		"floorId": FLOOR_1_ID,
		"url": url + FLOOR_1_ID + "/datalabels"
	},
    {
		"id": "2",
		"floorId": FLOOR_3_ID,
		"url": url + FLOOR_3_ID + "/datalabels"
	},
];