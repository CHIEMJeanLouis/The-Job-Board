import Job from "./Job";

const Jobs = (props) => {
  return (
    <div className="boxes">
      <div className="item">
        <Job
          className="red"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI - "
          country="Australie - "
          city="Sydney"
        />
      </div>
      <div className="item">
        <Job
          className="green"
          title="Agent de Sécurité-Pantin"
          contractType="CDI - "
          country="France - "
          city="Paris"
        />
      </div>
      <div className="item">
        <Job
          className="yellow"
          title="Responsable d'Atelier"
          contractType="CDD - "
          country="France - "
          city="Paris"
        />
      </div>
      <div className="item">
        <Job
          className="blue"
          title="Chef de Projets"
          contractType="CDI - "
          country="France - "
          city="Paris"
        />
      </div>
      <div className="item">
        <Job
          className="salmon"
          title="Développeur React.js"
          contractType="CDI - "
          country="France - "
          city="Paris"
        />
      </div>
      <div className="item">
        <Job
          className="red"
          title="Sales Associate Stockholm"
          contractType="CDI - "
          country="Suède - "
          city="Stockholm"
        />
      </div>
      <div className="item">
        <Job
          className="green"
          title="Vendeur/se - Cran Montana"
          contractType="CDI - "
          country="Australie - "
          city="Sydney"
        />
      </div>

      <div class="item ">
        <Job
          className="yellow"
          title="CRM @ Data Quality Analyst"
          contractType="CDI - "
          country="USA - "
          city="New-York"
        />
      </div>
      <div className="item">
        <Job
          className="blue"
          title="Infirmier (H/F)"
          contractType="CDI - "
          country="France - "
          city="Pantin"
        />
      </div>
    </div>
  );
};

export default Jobs;
