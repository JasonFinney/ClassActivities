var orm = require("./config/orm");

orm.select("party_name", "parties");
orm.select("client_name", "clients");
orm.selectWhere("party_name", "parties", "party_type", "grown-up");
orm.selectAll(["client_name", "party_name"], "clients", "parties", "id", "client_id");