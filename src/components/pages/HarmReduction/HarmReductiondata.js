import React from 'react';

const HarmReduction = () => {
  return (
    <div className="bg-[#0f1d2b] min-h-screen p-4 text-white">
      {/* Header */}
      <div className="bg-blue-100 text-black text-center py-3 text-xl font-bold rounded">
        Harm Reduction
      </div>

      {/* Description */}
      <div className="bg-yellow-400 text-black text-sm p-2 mt-4 rounded-md">
        Harm reduction is a set of practical strategies and ideas aimed at reducing negative consequences associated with drug use. It is also a movement for social justice built on a belief in, and respect for, the rights of people who use drugs.
      </div>

      {/* Harm Reduction Tips */}
      <div className="mt-6">
        <h2 className="text-center text-lg font-bold">HARM REDUCTION TIPS</h2>
        <div className="w-full max-w-2xl mx-auto mt-4">
          {[
            "Tip 1: Never share needles or other drug paraphernalia.",
            "Tip 2: Use clean and sterile equipment for every injection.",
            "Tip 3: Test your drugs using reagent kits to know their purity.",
            "Tip 4: Start with a small dose to gauge the potency of the substance.",
            "Tip 5: Avoid mixing drugs, especially with alcohol.",
            "Tip 6: Stay hydrated and eat well.",
            "Tip 7: Have a trusted person with you if you are trying a new substance.",
            "Tip 8: Know the signs of overdose and how to respond.",
            "Tip 9: Seek professional help if you feel your drug use is out of control.",
            "Tip 10: Respect the choices of others and promote safe practices.",
          ].map((tip, index) => (
            <div key={index} className="bg-[#15232f] p-3 mb-2 rounded-md border border-gray-600">
              {tip}
            </div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="mt-6">
        <h2 className="text-center text-lg font-bold">RESOURCES</h2>
        <div className="w-full max-w-2xl mx-auto mt-4">
          {[
            "Resource 1: Harm Reduction Coalition",
            "Resource 2: Drug Policy Alliance",
            "Resource 3: National Harm Reduction Coalition",
            "Resource 4: Harm Reduction International",
            "Resource 5: Local harm reduction services and organizations",
          ].map((resource, index) => (
            <div key={index} className="bg-[#15232f] p-3 mb-2 rounded-md border border-gray-600">
              {resource}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-6 border-t border-gray-500 pt-4">
        <p className="font-bold">Remember, harm reduction is about keeping yourself and others safe. If you need help, don't hesitate to reach out to local services or support groups.</p>
      </div>
    </div>
  );
};

export default HarmReduction;