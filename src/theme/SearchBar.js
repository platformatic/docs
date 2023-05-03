import React from 'react';
import EnhancedSearch from 'enhancedocs-search';

import 'enhancedocs-search/dist/style.css';

export default function SearchBarWrapper(props) {
  return (
    <EnhancedSearch
      config={{
        enhancedSearch: {
          projectId: "645220e69c384af58cd1ad15",
          accessToken: "pk_e30d35239d99dc3b3784c7aa66b80fa1793d154df2030477"
        }
      }}
      theme={{
        primaryColor: "#00283d"
      }}
      {...props}
    />
  );
};
