import { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <div className="flex mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 ${activeTab === tab.id ? 'text-white' : 'text-secondary'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>
        {tabs.map(tab => (
          <div key={tab.id} className={ "flex flex-row flex-wrap gap-3 items-center " +(activeTab === tab.id ? 'block' : 'hidden')}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;