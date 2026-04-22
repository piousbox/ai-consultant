import { Link } from "react-router";
import { FileText, ChevronRight } from "lucide-react";

export function Terms() {
  return (
    <>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Legal</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Terms and Conditions</h1>
            <p className="text-slate-400">Last updated: April 22, 2026</p>
          </div>

          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                By accessing and using the services provided by AI Software Consultant, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Services</h2>
              <p className="mb-4">
                AI Software Consultant provides artificial intelligence and machine learning consulting services, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>AI strategy and consulting</li>
                <li>Custom model development</li>
                <li>AI integration and deployment</li>
                <li>Data science and analytics</li>
                <li>Technical support and maintenance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Intellectual Property</h2>
              <p className="mb-4">
                Unless otherwise agreed in writing, all intellectual property rights in deliverables created during the engagement shall be determined by the specific project agreement. Client data and proprietary information remain the property of the client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Confidentiality</h2>
              <p className="mb-4">
                Both parties agree to maintain the confidentiality of any proprietary information shared during the course of the engagement. This includes business strategies, technical implementations, and any sensitive data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Payment Terms</h2>
              <p className="mb-4">
                Payment terms will be specified in individual project agreements. Unless otherwise stated, invoices are due within 30 days of receipt. Late payments may incur additional fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
              <p className="mb-4">
                AI Software Consultant shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Termination</h2>
              <p className="mb-4">
                Either party may terminate the engagement with written notice as specified in the project agreement. Upon termination, the client shall pay for all work completed up to the termination date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Warranties and Disclaimers</h2>
              <p className="mb-4">
                Services are provided "as is" without warranty of any kind. While we strive for excellence, we do not guarantee specific results from AI implementations, as outcomes can depend on many factors including data quality and business processes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Governing Law</h2>
              <p className="mb-4">
                These terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Information</h2>
              <p className="mb-2">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 mt-4">
                <p className="mb-1">AI Software Consultant</p>
                <p className="mb-1">100 S 1st St</p>
                <p className="mb-1">Austin, TX 78701</p>
                <p className="mt-2">
                  Email: <a href="mailto:contact@example.com" className="text-blue-400 hover:text-blue-300">contact@example.com</a>
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700">
            <Link to="/contact" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              Have questions? Contact us
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
