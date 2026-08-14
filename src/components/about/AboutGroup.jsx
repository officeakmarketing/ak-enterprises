export default function AboutGroup() {
  return (
    <section className="py-24 border-b border-muted-grey">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-warm-grey">
          <thead className="text-brand-gold uppercase tracking-widest text-sm border-b border-muted-grey">
            <tr>
              <th className="py-4 px-4 w-1/4">Division</th>
              <th className="py-4 px-4">What It Is</th>
              <th className="py-4 px-4 w-1/4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-muted-grey">
            <tr>
              <td className="py-6 px-4 font-bold text-white text-lg">
                AK Marketing
              </td>
              <td className="py-6 px-4">
                Services division  bespoke Business Operating System builds for
                clients
              </td>
              <td className="py-6 px-4 text-white">
                Active  live clients across UK and USA
              </td>
            </tr>
            <tr>
              <td className="py-6 px-4 font-bold text-white text-lg">Nova</td>
              <td className="py-6 px-4">
                AI-native operating system  productised version of what we
                build manually
              </td>
              <td className="py-6 px-4 text-brand-gold font-bold">
                Live deployment
              </td>
            </tr>
            <tr>
              <td className="py-6 px-4 font-bold text-white text-lg">
                Future Ventures
              </td>
              <td className="py-6 px-4">
                Additional business lines built on the same systems principle
              </td>
              <td className="py-6 px-4 text-warm-grey">In development</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
