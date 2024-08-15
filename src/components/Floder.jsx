import React from 'react';
import fileExplorerData from '../data/FolderData';

const FileExplorer = () => {
  const renderFolderContent = (item) => (
    <li key={item.name} className="list-group-item"> {(() => {
      if (item.type === 'folder') {
        return (
          <div>
            <a className="text-decoration-none" data-bs-toggle="collapse" href={`#${item.name}`} 
            role="button" aria-expanded="false" style={{ cursor: 'pointer' }}>
              📁 {item.name}
            </a>
            <div id={item.name} className="collapse mt-2">
              <ul className="list-group">
                {item.children && item.children.map((child) => renderFolderContent(child))}
              </ul>
            </div>
          </div>
        );
      } else {
        return <div>📄 {item.name}</div>;
      }
    })()}
  </li>  
  );

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4">File Explorer</h2>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <ul className="list-group">
              {fileExplorerData.map((item) => renderFolderContent(item))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;
