import "./App.css";
import Nav from "./components/Nav";
import Ed from "./ed.png";
import Po from "./po.png";
import Edu from "./edu.png";
const Section = ({ id, children, className }) => {
  return (
    <section
      id={id}
      className={`w-full flex max-sm:px-4 relative px-6 ${className}`}
    >
      {children}
    </section>
  );
};

const Card = ({ children }) => {
  return (
    <div className="hover:bg-secondary group cursor-pointer lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] rounded-2xl shadow-xl">
      <div className="w-16 h-16 lg:w-[100px] lg:h-[100px] lg:mt-8 lg:ml-8 mt-4 ml-4 rounded-full group-hover:bg-white bg-[#ebf0ff]"></div>
      {children}
    </div>
  );
};

const Item = () => {
  return <div className="bg-white rounded-lg w-48 h-12"></div>;
};

const PhoneIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-secondary"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
};

const EmailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 text-secondary"
    >
      <path
        strokeLinecap="round"
        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
      />
    </svg>
  );
};

const LocationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-secondary"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
};

function App() {
  return (
    <>
      <Nav />
      <Section
        id="#home"
        className={"h-[54vh] pt-24 justify-around bg-primary"}
      >
        <div className="w-1/2 py-16 max-sm:w-full lg:px-24">
          <p className="text-slate-600 text-4xl lg:text-6xl font-bold">
            <span className="text-blue-600 font-bold">Empowring </span>
            Minds, Enriching{" "}
            <span className="text-blue-600 font-bold">Features</span>
          </p>
          <p className="text-slate-600 mt-2 lg:text-lg">
            lorem ipsum something word blob, lorem ipsum something word blob
          </p>
          <div className="flex items-center mt-20 px-4 max-sm:p-0 justify-start">
            <a
              href={"#"}
              className="text-white px-6 py-2 bg-secondary mr-16 max-sm:mr-8 rounded-full font-bold"
            >
              Join Us
            </a>
            <div className="bg-white p-4 rounded-full mr-3">
              <PhoneIcon />
            </div>
            <p className="text-slate-600">Reach us on WhatsApp</p>
          </div>
        </div>
        <div className="w-1/2 max-sm:hidden flex justify-evenly">
          <img src={Ed} />
        </div>
      </Section>
      <section></section>
      <Section id="about" className="py-4 max-sm:flex-col justify-between">
        <div className="w-1/2 mt-28 px-14 max-sm:w-full">
          <p className="text-gray-300 font-bold text-2xl mb-2">ABOUT</p>
          <p className="text-4xl font-bold text-slate-500">
            <span className="text-secondary">Who</span> We Are ?
          </p>
          <p className="mt-8 text-slate-500 text-md">
            Welcome to our education website, where we believe that learning is
            a lifelong journey that should be accessible to all
          </p>
          <div className="w-full flex items-center justify-center">
            <img src={Edu} />
          </div>
        </div>
        <div className="w-1/2 max-sm:w-full flex justify-end">
          <div className="pt-24 grid grid-cols-2 gap-6 w-[460px] lg:w-[700px]">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </Section>
      <Section id="program" className={"px-24 pt-14 mb-4"}>
        <div className="bg-primary rounded-lg w-full flex items-center flex-col">
          <p className="text-slate-600 font-bold text-3xl mt-4">Our Program</p>
          <div className="px-6 flex items-center justify-center flex-wrap gap-4 py-6">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </Section>
      <Section id="teachers" className={"px-24 pt-14 mb-4"}>
        <div className="bg-primary h-[450px] rounded-lg w-full flex items-center flex-col">
          <p className="text-slate-600 font-bold text-3xl mt-4">Teachers</p>
          <div className="px-6 flex items-center justify-center flex-wrap gap-4 py-6">
            <div className="absolute bottom-[-50px] flex flex-col items-center justify-center">
              <div className="w-[300px] bg-secondary h-7 flex items-center justify-center">
                <p className="text-white">+5 years experiance</p>
              </div>
              <img className="h-[400px] w-[300px]" />
              <div className="absolute bottom-[-40px] border shadow-lg text-xl flex items-center justify-center font-bold bg-white w-[200px] h-16 rounded-md">
                <p className="text-slate-500">Saadaoui Brahim</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* <Section id="#reviews">
        <div></div>
      </Section> */}
      <footer className="relative flex flex-col items-center justify-center">
        <div className="w-full py-2 mt-[300px] bg-[#19467e]"></div>
        <div className="absolute flex items-end justify-start gap-6 bg-[#19467e] w-[400px] h-[100px] top-[250px] rounded-lg">
          <img src={Po} className="h-[200px]" />
          <p className="mb-9 text-white font-bold text-md">
            Improve Your English With Us
          </p>
        </div>
        <div className="bg-[#ecf1ff] w-full px-4 py-14 flex flex-wrap gap-12">
          <div className="text-slate-500 font-bold">Algeria Talks English</div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-center">
              <PhoneIcon />
              <p className="ml-4">023433035 / 0697058658 / 0549440915</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <LocationIcon />
            <p className="ml-4">City LPP 1200 Logts Q12 Mahelma Alger</p>
          </div>
          <div className="flex items-center justify-center">
            <EmailIcon />
            <p className="ml-4">algeriatalksenglish@gmail.com</p>
          </div>
        </div>
        <div className="bg-[#19467e] py-2 text-white w-full flex items-center justify-center">
          Created by Saadaoui Salah
        </div>
      </footer>
    </>
  );
}

export default App;
