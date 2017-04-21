// Copyright (c) 2016, Indictranstech and contributors
// For license information, please see license.txt

frappe.query_reports["Sales Analysis"] = {
	"filters": [
				{
					"fieldname":"customer",
					"label": __("Customer"),
					"fieldtype": "Link",
					"options": "Customer",
					"width": "80",
					
				},
				{
					"fieldname":"name",
					"label": __("Sales Order"),
					"fieldtype": "Link",
					"options": "Sales Order",
					"width": "80",
					
				},
				{
					"fieldname":"from_date",
					"label": __("From Date"),
					"fieldtype": "Date",
					"width": "80",
				},
				{
					"fieldname":"to_date",
					"label": __(" To Date"),
					"fieldtype": "Date",
					"width": "80",
				},


			]
}
