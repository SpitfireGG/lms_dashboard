// Central configuration for the NAATI dialogue-interpreting mock test that runs
// over the Gemini Live API (native audio). Everything the session needs that is
// content/policy related lives here so it can be tuned in one place.

// --- Model -------------------------------------------------------------------
// Native-audio Live model: a single low-latency model that produces natural,
// emotion-aware speech and handles turn-taking via built-in VAD. Kept as one
// constant so it is trivially swappable. Re-confirm the current id against
// https://ai.google.dev/gemini-api/docs/models — preview ids rotate.
//   Alternative (newer preview): 'gemini-3.1-flash-live-preview'
//   GA candidate:                'gemini-live-2.5-flash-native-audio'
export const LIVE_MODEL = 'gemini-2.5-flash-native-audio-preview-12-2025';

// Native-audio prebuilt voice. See the Live API docs for the full voice list.
export const LIVE_VOICE = 'Charon';

// Audio sample rates fixed by the Live API contract.
export const INPUT_SAMPLE_RATE = 16000; // mic -> model (16-bit PCM, mono)
export const OUTPUT_SAMPLE_RATE = 24000; // model -> speakers

// --- Scenario ----------------------------------------------------------------
// The "BANK ROBBERY" NAATI dialogue (assets/samples/BANK ROBBERY pdf.pdf),
// extracted once. Each turn is voiced by the AI in its ORIGINAL language; the
// candidate interprets it into the other language of the pair.
export type Speaker = 'Police Officer' | 'Mrs. Karki';

export interface DialogueTurn {
  n: number;
  speaker: Speaker;
  /** Language the AI must speak this turn in. */
  language: 'English' | 'Nepali';
  /** The line, in its original language. */
  text: string;
}

export const SCENARIO_TITLE = 'Bank Robbery — Police Statement';
export const LANGUAGE_PAIR = 'English ↔ Nepali';

export const DIALOGUE: DialogueTurn[] = [
  { n: 1, speaker: 'Police Officer', language: 'English', text:
    'Good afternoon, Mrs. Karki. Thank you for attending today to provide your official statement. Before we proceed, I need to confirm some basic details for documentation. Could you please state your full name, residential address, and phone number?' },
  { n: 2, speaker: 'Mrs. Karki', language: 'Nepali', text:
    'हुन्छ, अवश्य पनि। मेरो नाम कविता काकी हो। म युनिट ३, ४९ प्रिन्सेस स्ट्रिट, पेन्सहर्स्टमा बस्छु। मेरो सम्पर्क नम्बर ०४२० ४६१ ५०० हो।' },
  { n: 3, speaker: 'Police Officer', language: 'English', text:
    'Thank you. We have already taken statements from the bank staff. However, we still need to establish your exact location during the incident. Please describe what you were doing at that time.' },
  { n: 4, speaker: 'Mrs. Karki', language: 'Nepali', text:
    'म र मेरो श्रीमान करिब पौने १० बजे बैंक पुगेका थियौं। उहाँ एटीएम (ATM) प्रयोग गर्न बाहिर जानुभयो, म भने भित्रै बसेर बैंकका लेखापाल श्री जर्ज गेट्ससँग कुरा गरिरहेकी थिएँ।' },
  { n: 5, speaker: 'Police Officer', language: 'English', text:
    'Do you normally handle your financial matters through Mr. Gates?' },
  { n: 6, speaker: 'Mrs. Karki', language: 'Nepali', text:
    'हो, उहाँले विगत दुई वर्षदेखि मेरो खाताहरू व्यवस्थापन गर्दै आउनुभएको छ। हामी लगानी र व्यावसायिक निर्णयहरूका बारेमा नियमित रूपमा उहाँसँग सल्लाह-परामर्श लिने गर्छौं।' },
  { n: 7, speaker: 'Police Officer', language: 'English', text:
    'We’ve already spoken with Mr. Gates, and he has provided his version of events. Now, please explain what you personally observed.' },
  { n: 8, speaker: 'Mrs. Karki', language: 'Nepali', text:
    'म ५ हजार ८ सय डलर ($५,८००) जम्मा गर्नै लागेकी थिएँ, अचानक एकजना मानिस भित्र छिर्‍यो। उसले रातो र कालो धर्का भएको टप (लुगा), गाढा रङ्गको पाइन्ट, बुट जुत्ता र मुख छोप्ने मास्क लगाएको थियो।' },
  { n: 9, speaker: 'Police Officer', language: 'English', text:
    'Could you clarify the mask? Was it a full-face covering like a balaclava or something different?' },
  { n: 10, speaker: 'Mrs. Karki', language: 'Nepali', text:
    'मलाई याद भएसम्म, त्यो ब्याटम्यान शैलीको मास्क थियो जसले उसको अधिकांश अनुहार ढाकेको थियो। त्यो साधारण पसलहरूमा बेचिने जस्तो देखिँदैनथ्यो। उसले चम्किलो कालो पञ्जा पनि लगाएको थियो।' },
  { n: 11, speaker: 'Police Officer', language: 'English', text:
    'Did you notice any other features that might help identify him?' },
  { n: 12, speaker: 'Mrs. Karki', language: 'Nepali', text:
    'अहँ, उसको अनुहार पूरै छोपिएको थियो, तर मलाई उसको नाकको टुप्पोमा एउटा स्पष्ट देखिने कोठी भएको राम्रोसँग याद छ। मैले देख्न सकेको अनुहारको एकमात्र विवरण यही हो।' },
  { n: 13, speaker: 'Police Officer', language: 'English', text:
    'That’s a very important detail. I’ll record it. Is there anything else you remember?' },
  { n: 14, speaker: 'Mrs. Karki', language: 'Nepali', text:
    'छैन, म साह्रै डराएकी थिएँ र मेरा हातहरू माथि उठाएकी थिएँ। म घुँडा टेकेर बसेकी हुनाले त्योभन्दा बढी केही याद गर्न सकिनँ। पछि केही सम्झना आयो भने म तपाईंलाई जानकारी गराउनेछु।' },
  { n: 15, speaker: 'Police Officer', language: 'English', text:
    'That’s alright. We can continue later if needed. Please try to stay calm. If you need support, you may contact our assistance helpline.' },
];

// --- System instruction ------------------------------------------------------
// Drives the examiner behaviour. The hard rule is one segment per turn, then
// stop and wait — the candidate must do the interpreting, never the AI.
function buildScript(): string {
  return DIALOGUE.map(
    (t) => `${t.n}. [${t.speaker}, speak in ${t.language}]: ${t.text}`,
  ).join('\n');
}

export function buildSystemInstruction(): string {
  return [
    'You are an examiner running a NAATI-style dialogue interpreting mock test.',
    `The scenario is a police statement after a bank robbery. The language pair is ${LANGUAGE_PAIR}.`,
    'There are two characters: a Police Officer who speaks ENGLISH, and Mrs. Karki who speaks NEPALI.',
    'You voice BOTH characters. The candidate (the user) is the interpreter sitting between them.',
    '',
    'HOW THE TEST RUNS — follow these rules exactly:',
    '1. First, give a short spoken briefing in English (2-3 sentences): greet the candidate, say this is the "Bank Robbery" dialogue, English and Nepali, and that they should interpret each segment into the other language after you deliver it. Then immediately deliver segment 1.',
    '2. Deliver EXACTLY ONE numbered segment at a time, voiced in that segment\'s original language, using the character\'s voice and tone.',
    '3. After delivering a segment, STOP and stay silent. Wait for the candidate to interpret it into the other language. Do NOT interpret it yourself. Do NOT speak the other language version.',
    '4. When the candidate has finished their interpretation, do not correct or grade them during the test. Simply proceed to deliver the NEXT segment in order.',
    '5. If the candidate stays silent for a while or says something like "repeat" / "again" / "पुनः", re-read the current segment once, then wait again.',
    '6. Keep strictly to the order of the segments below and do not invent new content.',
    '7. After segment 15 has been delivered and interpreted, say a brief closing line in English to end the session and thank the candidate.',
    '',
    'THE DIALOGUE (deliver these in order, one per turn):',
    buildScript(),
  ].join('\n');
}
