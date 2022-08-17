import React, { Component, useEffect, useState } from "react";

//jQuery libraries
import "jquery/dist/jquery.min.js";

//Datatable Modules
import "datatables.net-bs4/js/dataTables.bootstrap4";
import "datatables.net-bs4/css/dataTables.bootstrap4.css";

import $ from "jquery";

// INITIALIZE DATATABLE
$(document).ready(function () {
  setTimeout(function () {
    $("#datatable-component").DataTable({
      searching: false
    });
  }, 1000);
});

const Datatables = ({ data, header }) => {
  return (
    <table
      id="datatable-component"
      className="table table-hover table-bordered"
    >
      <thead>
        <tr>
          {header.map((item, key) => (
            <th key={key}>{item.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((result, key) => (
          <tr key={key}>
            {header.map((item, headerKey) => {
              if (item.render) {
                const RenderComponent = item.render;
                const props = {
                  data: result[item.field],
                  row: key,
                  object: result
                };
                return (
                  <td key={`${key}-${headerKey}`}>
                    <RenderComponent {...props} />
                  </td>
                );
              }
              return <td key={`${key}-${headerKey}`}>{result[item.field]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Datatables;
