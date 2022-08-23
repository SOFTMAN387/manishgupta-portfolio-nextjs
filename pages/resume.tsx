import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
             Information Technology 
            </h5>
            <p className="font-semibold">MIT,Muzaffarpur Institute of Technology (2021-2024).</p>
            <h5 className="my-2 text-xl font-bold">
             Computer Science Engineering
            </h5>
            <p className="font-semibold">I have done ,Diploma In Computer Science,Govt. Polytechnic College Gulzarbagh,patna-7 (2018-2021).</p>
           
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Web Developer || Industrial Training  </h5>
           
            <p className="font-semibold">SarpMindFire Pvt. Ltd.<br/></p>
            <span>20 Oct-20 Nov, 2020</span>
            
            <p className="my-3">Working with real world projects,Developing Live projects with clients.Knowing How web technology works...</p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Full Stack Development || Internship  </h5>
           
            <p className="font-semibold">PrepBytes<br/></p>
            <span>30 Aprl- 30 Oct, 2022</span>
            
            <p className="my-3">MERN Stack Technology,MongoDb,ExpressJs,ReactJs,Nodejs making projects and deploying to cloud Sever...</p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
