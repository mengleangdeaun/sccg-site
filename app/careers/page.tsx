import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

interface DepartmentMission {
  id: string;
  dept: string;
  en: string;
  kh: string;
  highlight?: boolean;
}

const mandates: DepartmentMission[] = [
  {
    id: "01",
    dept: "Human Resources",
    en: "To attract, develop, and retain talented people who drive our company’s growth and success.",
    kh: "ដើម្បីទាក់ទាញ អភិវឌ្ឈ និងរក្សាទុកបុគ្គលិកដែលមានសមត្ថភាព ដើម្បីជំរុញភាពរីកចំរើន និងជោគជ័យរបស់ក្រុមហ៊ុន។",
  },
  {
    id: "02",
    dept: "Admin Operations",
    en: "We serve with care, manage with system, and support with heart.",
    kh: "យើងបម្រើដោយការយកចិត្តទុកដាក់ គ្រប់គ្រងដោយប្រព័ន្ធ និងគាំទ្រដោយបេះដូង។",
  },
  {
    id: "03",
    dept: "Marketing",
    en: "To drive business growth through bold creativity, smart digital engagement, and marketing innovation that sets new benchmarks in our industry.",
    kh: "ដើម្បីជំរុញអាជីវកម្មឲ្យរីកចម្រើន តាមរយៈសិល្បៈនៃការច្នៃប្រឌិតដ៏មានឥទ្ធិពល ជាមួយការចូលរួមក្នុងឌីជីជលដ៏ឆ្លាតវៃ និងការច្នៃប្រឌិតផ្នែកទីផ្សារ ដែលបង្កើតស្តង់ដាថ្មីក្នុងវិស័យការងាររបស់យើង។",
  },
  {
    id: "04",
    dept: "Product Intelligence",
    en: "To be the knowledge hub of the company by deeply understanding every product, educating our customers, and empowering our teams with the right insights to succeed.",
    kh: "ជាបណ្តុំចំណេះដឹងរបស់ក្រុមហ៊ុន ដោយយល់ដឹងស៊ីជំរៅអំពីផលិតផលទាំងអស់ ផ្តល់កាណែនំាប្រឹក្សាដល់អតិថិជន និងបង្កើនសមត្ថភាពក្រុមការងាររបស់យើងជាមួយនឹងចំណេះដឹងត្រឹមត្រូវដើម្បីទទួលបានជោគជ័យ។",
  },
  {
    id: "05",
    dept: "Supply & Logistics",
    en: "To be the final touchpoint that leaves a lasting impression—ensuring each delivery reflects our dedication to care, quality, and customer satisfaction.",
    kh: "ដើម្បីជាការបញ្ចប់ការងារ ដែលផ្ដល់អារម្មណ៍ល្អចំពោះអតិថិជន ដោយធានាថាការដឹកជញ្ជូននីមួយៗបង្ហាញពីការយកចិត្តទុកដាក់ ប្រុងប្រយ័ត្នពីគុណភាពលើផលិតផល និងការពេញចិត្តរបស់អតិថិជន។",
  },
  {
    id: "06",
    dept: "Commercial Sales",
    en: "We listen first, solve fast, and offer products/services that solve clients problems.",
    kh: "យើងស្តាប់ជាមុនសិន បន្ទាប់មកដោះស្រាយយ៉ាងរហ័ស និងផ្ដល់នូវផលិតផល/សេវាកម្មដែលដោះស្រាយបញ្ហារបស់អតិថិជន។",
  },
  {
    id: "07",
    dept: "Warehouse Inventory",
    en: "To manage and maintain inventory with accuracy, efficiency, and accountability.",
    kh: "ដើម្បីគ្រប់គ្រងនិងរក្សាសារពើភ័ណ្ឌ គឺគ្រប់គ្រងយ៉ាងសកម្ម និងទ្រទ្រង់បរិមាណត្រឹមត្រូវនៃស្ដុក(ផលិតផល និងសម្ភារៈ) ជាមួយនឹងភាពត្រឹមត្រូវ ប្រសិទ្ធភាព និង ការទទួលខុសត្រូវ។",
  },
  {
    id: "08",
    dept: "Creative Department",
    en: "Our mission is to bring ideas to life with speed, style, and storytelling that inspires.",
    kh: "បេសកកម្មរបស់យើងគឺដើម្បីពាំនាំគំនិតឲ្យក្លាយទៅជាការពិត ដោយភាពរហ័ស មានបច្ចេកទេស និងរឿងរ៉ាវដែលបំផុសគំនិតល្អៗ។",
  },
  {
    id: "09",
    dept: "Customer Service",
    en: "To provide a seamless, personalized, and exceptional service experience that reflects the premium quality of our brand and exceeds the expectations of every valued customer.",
    kh: "ផ្តល់ជូនបទពិសោធន៍សេវាកម្មដ៏រលូន ភាពផ្ទាល់ខ្លួន និងល្អឥតខ្ចោះដែលឆ្លុះបង្ហាញពីគុណភាពស្តង់ដារកម្រិតខ្ពស់នៃកេរ្តិ៍ឈ្មោះក្រុមហ៊ុនរបស់យើង និងលើសពីការរំពឹងទុករបស់អតិថិជនគ្រប់រូប។",
  },
];


export default function CareersPage() {
  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-neutral-900 text-gray-900 dark:text-gray-50 font-sans selection:bg-red-500 selection:text-white antialiased transition-colors duration-300">
      
      {/* Laravel-Style Background Blueprint Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <Navbar />

        <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-24">
        
        <div className="mb-8 pb-8">
          <Link
            href="/"
            className="inline-flex items-center px-3 py-2 gap-2 text-sm font-bold text-red-500 hover:text-red-600 transition-colors mb-8 uppercase"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5303 5.46967C10.8232 5.76256 10.8232 6.23744 10.5303 6.53033L5.81066 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H5.81066L10.5303 17.4697C10.8232 17.7626 10.8232 18.2374 10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303L3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967Z" fill="currentColor"></path></svg> Return
          </Link>



          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            
            {/* Left 7 Columns: Massive Editorial Typography */}
            <div className="lg:col-span-7 space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white">
            Join
            <span className="text-red-600"> Our Team</span>
          </h1>
            </div>

            {/* Right 5 Columns: Quoted Spec anchored to the H1 Baseline */}
            <div className="lg:col-span-5 space-y-6 lg:pb-1">
              <p className="text-base sm:text-md text-left md:text-right text-zinc-600 dark:text-zinc-400  border-r-4 border-red-600 pr-4 font-sans">
                We build human capital through structured hiring, intensive onboarding, and performance-based promotion.
              </p>
            
            </div>

          </div>
          
        </div>

        {/* =========================================================
            2. THE 3x3 DEPARTMENTAL MANDATES MATRIX
        ========================================================== */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
        <p className="font-mono text-lg sm:text-xl tracking-widest font-bold uppercase text-red-600 dark:text-red-500">
          <span className="w-2 h-2 bg-red-600 inline-block mb-1"></span> Departmental Mission Matrix
        </p> 
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mandates.map((item) => (
              <div
                key={item.id}
                className={`group p-8 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm border transition-all duration-300 relative flex flex-col justify-between rounded-none ${
                  item.highlight
                    ? "border-red-600/60 dark:border-red-500/50 bg-red-50/20 dark:bg-red-950/10"
                    : "border-zinc-200 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/30"
                }`}
              >
                 <div className="absolute right-0 bottom-0 w-12 h-3 bg-red-500" />
                {/* Interactive Top Border Glow */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>

                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-base font-bold tracking-tight text-red-600 dark:text-red-500 uppercase">
                        {item.dept}
                      </h3>
                    </div>
                  </div>

                  {/* English Mandate (Primary) */}
                  <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    &quot;{item.en}&quot;
                  </p>
                </div>

                {/* Khmer Mandate (Secondary Translation) */}
                <div className="pt-4 border-t border-zinc-100 dark:border-white/5 mt-auto">
                  <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 leading-normal font-sans">
                    {item.kh}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            3. VACANCY PORTAL GATEWAY
        ========================================================== */}
        <div className="p-8 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/10 rounded-none flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden">
          
          {/* Subtle Red Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-full bg-red-600/5 blur-[100px] pointer-events-none z-0"></div>

          <div className="space-y-2 relative z-10">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white uppercase">
              Interesting Opportunity
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light">
              View open vacancies and submit dossiers directly through our recruitment platform.
            </p>
          </div>

          <div className="relative z-10 self-start md:self-auto">
            <Link
              href="https://la3la3.site/careers"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-[0.2em] transition-all rounded-none shadow-[0_0_15px_rgba(220,38,38,0.2)] hover:shadow-[0_0_25px_rgba(220,38,38,0.4)]"
            >
              Explore Our Careers
              <span className=" transform transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>

        </div>

      </main>
      
      <Footer />

    </div>
  );
}