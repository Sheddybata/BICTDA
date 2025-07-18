import React from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Example data structure for news posts (replace with real data extraction later)
export const newsPosts = [
  {
    date: '9th July 2025',
    title: 'National Cyber Security conference',
    caption: `BICTDA Bolsters Cybersecurity Commitment at National Conference at Abuja, Nigeria – July 2025 The Borno State Information and Communication Technology Development Agency (BICTDA) recently made its mark at the National Cybersecurity Conference in Abuja, a high-profile event focused on "Building a Resilient Digital Future." Organized by the National Information Technology Development Agency (NITDA) in partnership with the Office of the National Security Adviser (ONSA), the conference brought together leading figures from Africa's digital and cybersecurity landscape.
The BICTDA delegation was led by Dr. Idriss Mohammed Yelwa, the agency's Board Chairman, alongside Engr. Mohammed Kabir Wanori, FNSE, the Chief Executive Officer. Engr. Wanori is a well-known ICT leader and a strong advocate for digital transformation in Nigeria's North-East. Also representing BICTDA were Board members Dr. Mustapha Tijani and Hon. Zanna Lawan Ajimi.
The conference served as a crucial forum for top policymakers, subnational ICT CEOs, cybersecurity experts, and technology organizations from across the continent. Discussions centered on pressing issues such as emerging cyber threats, the role of artificial intelligence in digital security, the development of national and regional collaboration frameworks, and the formulation of proactive policies to secure the future of digital economies.
BICTDA's involvement in this significant event highlights its dedication to enhancing cybersecurity preparedness within Borno State. The agency is at the forefront of expanding digital access, improving digital literacy, and fostering ICT innovation in communities recovering from conflict.
"Our presence here signals BICTDA’s firm commitment to building a secure digital ecosystem that protects citizens, businesses, and government platforms in Borno," stated Engr. Wanori during the conference. He emphasized, "Cybersecurity is no longer optional—it is foundational to digital development." His remarks underscore the agency's commitment to aligning its strategies with global best practices.
The National Cybersecurity Conference also offered valuable networking opportunities, allowing subnational agencies like BICTDA to exchange experiences and explore strategic partnerships with both public and private sector stakeholders.
As BICTDA continues to be a vital force in Borno’s digital recovery and development, its active participation in such platforms reinforces its position as a key thought leader in digital resilience and innovation.`,
    image: '/news/National-Cyber-Security-conference.jpg',
    facebookUrl: '',
  },
  {
    date: '28th June 2025',
    title: 'Update from Gubio and Dikwa Digital Literacy Centers',
    caption: `Following our recent update on the Bayo Digital Literacy Center's resumption, we're pleased to report that Gubio and Dikwa Digital Literacy Centers have also resumed operations after the Sallah break. At Gubio, our team met to prepare for our next training session, praying for success. Meanwhile, our team in Dikwa visited two local schools to introduce our digital literacy program and enrolled 66 new students.

The visits were a success, with schools showing strong interest and support. We're looking forward to helping more people learn digital skills.`,
    image: '/news/Update from Gubio.jpg',
    facebookUrl: '',
  },
  {
    date: '20th June 2025',
    title: 'NUJ/NTA Honours Engr. Mohammed Kabir Wanori FNSE for Transforming Borno’s ICT Landscape.',
    caption: `Borno State, Nigeria June 20, 2025. In a significant recognition of leadership and innovation, the Nigerian Union of Journalists (NUJ), NTA Chapel, has awarded Engr. Mohammed Kabir Wanori FNSE, the Executive Secretary of the Borno ICT Development Agency (BICTDA), for his outstanding contributions to transforming the information and communication technology (ICT) landscape in Borno State.

The award ceremony, held in Maiduguri, the state capital, saw Engr. Wanori commended for his visionary leadership, unshakable commitment, and relentless efforts to bridge the digital divide in Borno. His work has been instrumental in promoting digital literacy, expanding access to ICT infrastructure, and fostering sustainable technological growth within the state.

Speaking at the event, The Chairperson of the NUJ/NTA Hajjia Murjanatu praised Engr. Wanori for his dedication to empowering Borno’s citizens through innovative digital initiatives. “This recognition is a testament to his steadfast commitment to making Borno a hub of digital innovation and inclusion,” said a NUJ spokesperson.

Engr. Wanori, in his acceptance speech, dedicated the award to the resilient people of Borno. “Despite the challenges we face, the courage and aspirations of our people continue to inspire us to push forward and achieve groundbreaking progress,” he stated.

The award highlights the growing importance of ICT development in Nigeria’s northeastern region, which has historically faced numerous challenges. Under Engr. Wanori’s leadership, BICTDA has launched several successful projects aimed at improving digital access and literacy across the state.

Looking ahead, Engr. Wanori reaffirmed BICTDA’s commitment to building a digitally inclusive Borno, one that empowers every citizen and sets the stage for continued innovation and growth.

This achievement not only underscores the impact of visionary leadership in the tech sector but also marks a milestone in Borno’s journey, under the able leadership of prof Babagana Umara Zulum towards a more connected and technologically empowered future.`,
    image: '/news/NTA Honours E.jpg',
    facebookUrl: '',
  },
  {
    date: '3rd June 2025',
    title: 'BICTDA Supports National Cybersecurity Conference 2025"\nAnchored by NITDA',
    caption: `The National Information Technology Development Agency (NITDA), in collaboration with key partners, has announced the inaugural National Cybersecurity Conference 2025. This significant event, scheduled for July 9th and 10th, 2025, at the Abuja Continental Hotel, aligns with the President's Renewed Hope Agenda of strengthening national security.

As Borno State's ICT agency, the Borno Information and Communication Technology Development Agency (BICTDA) recognizes the importance of cybersecurity in our rapidly evolving digital landscape. The conference theme, "Building a Resilient Digital Future," resonates with our efforts to promote digital literacy and technological growth in Borno State.

BICTDA is committed to supporting national initiatives that enhance cybersecurity and digital safety. We look forward to engaging with policymakers, cybersecurity professionals, and industry leaders at the conference to share knowledge and best practices.`,
    image: '/news/Development Agency NITDA.jpg',
    facebookUrl: '',
  },
  {
    date: '2nd June 2025',
    title: 'BICTDA Conducts Phase One Digital Literacy Exams in Dikwa, Kaga, and Monguno',
    caption: `The Borno State Information and Communication Technology Development Agency (BICTDA) has commenced Phase One examinations for trainees at the newly established Digital Literacy Centers in Dikwa, Kaga, and Monguno.

The exams, which began on Monday, 2nd June 2025, focus on Basic Digital Literacy and are expected to conclude by Wednesday, 4th June 2025.

A total of 750 trainees are participating in the exams:
250 Local Government staff
500 out-of-school youth and petty business owners

The examination exercise is being supervised and supported by:
18 instructors
3 center managers
3 official invigilators

This initiative is part of BICTDA’s commitment to bridging the digital divide and empowering communities across Borno State with practical ICT knowledge and lifelong digital skills.`,
    image: '/news/Phase One.jpg',
    facebookUrl: '',
  },
  {
    date: '2nd June 2025',
    title: 'Borno State Information and Communication Technology Development Agency (BICTDA) Salutes Governor Zulum on the Launch of an Innovative Digital Transformation Plan for the Ministry of Justice, Paving the Way for a More Efficient and Accessible Judicial System',
    caption: `Maiduguri, Nigeria – 2nd june 2025
The Borno State Information and Communication Technology Development Agency (BICTDA) has extended its heartfelt congratulations to His Excellency, Professor Babagana Umara Zulum, MNI, FNSE, Executive Governor of Borno State, on the groundbreaking launch of the Digital Transformation Plan for the Borno State Ministry of Justice a bold initiative that is set to redefine the administration of justice in the state and position Borno as a national trailblazer in digital governance.

Speaking on behalf of the agency, during Borno start up ignite 2025 in the conference hall of Borno State Hotel Maiduguri, the Executive Secretary, Engr. Mohammed Kabir Wanori, FNSE, lauded Governor Zulum’s dedication to innovation, institutional reform, and good governance. He noted that the digital transformation of the judicial sector not only strengthens the rule of law but also aligns perfectly with global best practices in public service delivery.

“This forward thinking initiative,” Engr. Wanori stated, “marks a significant milestone in Borno State’s journey toward a transparent, responsive, and technologically driven judicial system. We commend His Excellency for once again demonstrating visionary leadership and a firm commitment to modernizing the state’s institutions for the benefit of all citizens.”

The digital plan, unveiled in a high-level event in Maiduguri, was championed by the Hon. Chief Judge, Justice Kashim Zanna, and the Hon. Commissioner for Justice and Attorney General, Barr. Hauwa Abubakar Isah. The plan outlines a five-year roadmap aimed at streamlining court procedures, digitizing records, fast-tracking legal proceedings, and expanding access to justice through smart technology.

Justice Zanna highlighted that several courts have already adopted digital sitting sessions, a move that has significantly reduced case backlogs and improved judicial efficiency. In her remarks, the Attorney General praised the initiative’s transformative potential and emphasized the urgent need to revise and modernize the Penal Code to reflect current realities.

In his keynote address, Governor Zulum reaffirmed his administration’s full backing for the judicial digitalization project. He underscored the importance of involving both legal consultants and ICT professionals to support capacity building and code reform. “The digitalization of justice,” he noted, “is not just a reform, it is a necessity for development, accountability, and the protection of citizens' rights.”

In light of the strategic importance of this initiative, BICTDA supports the initiative and expresses its readiness to work collaboratively with the Ministry of Justice to ensure its maximum success, in line with its statutory mandate to drive ICT development and governance across all Ministries, Departments, and Agencies (MDAs) in Borno State. BICTDA is uniquely positioned to:
Provide technical guidance and ensure compliance with global ICT standards
Develop secure and interoperable digital platforms for justice delivery
Coordinate digital skills development for judicial and administrative staff
Monitor implementation and ensure the long-term sustainability of the system
Engr. Wanori further emphasized that working together will enhance institutional synergy, avoid duplication of efforts, and ensure that the justice digitalization project is harmonized with the broader Borno State 25-Year Development and Transformation Plan.

BICTDA reaffirmed its readiness to deploy its expertise, resources, and strategic partnerships in support of this pivotal reform. “We remain committed to Your Excellency’s digital transformation agenda,” Wanori concluded, “and we stand ready to play a pivotal role in actualizing this vision for the benefit of present and future generations.”

The Digital Transformation Plan is expected to significantly improve transparency, accountability, and accessibility in Borno State’s justice delivery system setting a precedent for the states in Nigeria that are yet to commence and indeed, the wider African region.`,
    image: '/news/alutes Governor Zulum on the Launch.jpg',
    facebookUrl: '',
  },
  {
    date: '28th May 2025',
    title: 'Engr. Mohammed Kabir Wanori FNSE Congratulates Governor Babagana Umara Zulum on the occasion of the sixth anniversary of his leadership in Borno State and marks two years into his second term.',
    caption: `As the Executive Secretary of the Borno State Information and Communication Technology Development Agency (BICTDA), Engr. Wanori commends Governor Zulum for his exemplary and transformative leadership. He recognizes the Governor's firm commitment to revitalizing Borno State through a bold governance approach centered on the needs of the people, which serves as a model of visionary leadership throughout Nigeria. Over the past six years, Zulum has consistently fulfilled his promise to rebuild and reform the state, achieving notable and impactful results despite significant challenges.

Engr. Wanori particularly praises the Governor's innovative steps toward digital transformation, highlighting the focus on ICT development, e-governance, and youth training in digital skills. Under Zulum’s guidance, Borno State has made considerable progress in incorporating technology into governance and public services, laying a vital foundation for growth driven by innovation. The establishment and enhancement of agencies like BICTDA demonstrate the Governor's recognition that Borno's future depends on knowledge, connectivity, and digital empowerment.

In addition to advancements in the digital realm, Engr. Wanori acknowledges the Governor's remarkable accomplishments in education, healthcare, infrastructure, security, agriculture, and humanitarian efforts. He points out the swift construction of schools, hospitals, and roads across local governments, the safe resettlement of displaced persons, and robust empowerment programs for youth and women that have significantly enhanced livelihoods and reinstated dignity among citizens.

“As an engineer and public servant, I find Governor Zulum’s governance approach to be both strategic and profoundly human,” stated Engr. Wanori. “His Excellency is focused not just on building infrastructure but also on fostering trust, resilience, and hope for future generations. His influence on the ICT sector has particularly opened up new opportunities for young innovators and tech entrepreneurs, promoting digital inclusion across Borno State.”

Engr. Wanori, who also leads the Nigerian Society of Engineers' Regional Development Committee, emphasizes that Governor Zulum’s leadership embodies integrity, innovation, and inclusivity. He encourages professionals, youth, and community leaders to continue supporting the Governor's administration, which he considers a source of hope and renewal for the North-East and all of Nigeria.

In closing, Engr. Wanori FNSE once again congratulates His Excellency and wishes him continued strength, wisdom, and success in steering Borno State toward peace, progress, and prosperity.`,
    image: '/news/ohammed Kabir Wanori FNSE Congratulates.jpg',
    facebookUrl: '',
  },
  {
    date: '28th May 2025',
    title: 'NIEEE President Advocates Collaboration with BICTDA, Commends Governor Zulum’s ICT Vision',
    caption: `The President of the Nigerian Institute of Electrical and Electronics Engineers (NIEEE), Engr. Felix Olu, FNIEEE, has led a high-level advocacy visit to the Borno State Information and Communication Technology Development Agency (BICTDA) to explore avenues for partnership and strategic collaboration.

During the engagement, discussions focused on potential synergies between NIEEE and BICTDA, particularly in the areas of digital infrastructure, youth empowerment, and technology-driven economic development. The visit also highlighted preparations for the forthcoming International Conference and Exhibition on Power and Telecommunication (ICEPT) 2025, scheduled to hold from October 13th to 17th, 2025, in Osogbo, Osun State.

With the theme “Digital Infrastructure and Innovation for Inclusive Economic Growth,” ICEPT 2025 aims to spotlight transformative technologies and policy initiatives that drive national progress. Engr. Olu expressed confidence that this year’s conference would serve as a platform to showcase the remarkable strides made by the Borno State Government in leveraging ICT for development.

He specifically commended His Excellency, Governor Babagana Umara Zulum, for his visionary leadership in establishing BICTDA and the agency’s notable achievements within just one year of its inception. According to the NIEEE President, BICTDA stands as a model for ICT-led governance and innovation in Nigeria.

Engr. Olu was accompanied by Engr. Dr. Terab Ali, Chairman of the NIEEE Borno State Branch, who emphasized the importance of regional representation at national engineering forums and expressed readiness to deepen local engagement.

The visit underscores the growing national recognition of Borno State’s ICT transformation agenda and the critical role of professional bodies in driving sustainable digital development across Nigeria.`,
    image: '/news/NIEEE President Advocates.jpg',
    facebookUrl: '',
  },
  {
    date: '26th May 2025',
    title: 'DL4ALL NYSC CDS group paid a courtesy visit to the Borno State Information and Communication Technology Development Agency (BICTDA) to seek partnership in promoting digital literacy in secondary schools across the state.',
    caption: `The group outlined their goal of empowering students with essential ICT skills to help them excel in JAMB and WAEC examinations next year. This initiative aligns with BICTDA’s vision of fostering digital inclusion and youth empowerment.

The Executive Secretary of BICTDA, Engr. Mohammed Kabir Wanori FNSE, warmly received the team and assured them of the agency’s support. He commended their commitment to educational development and emphasized that the government of Borno State, under the dynamic leadership of His Excellency, Engr. Prof. Babagana Umara Zulum, is highly passionate about initiatives that promote digital literacy, innovation, and education among youths.

BICTDA has recorded notable achievements in driving ICT development across Borno State, including the establishment of ICT hubs, training of over 5,000 youths and civil servants in various digital skills, deployment of e-governance systems, and collaborations with local and international tech partners.

Together, we are building a smarter, more digitally empowered Borno.`,
    image: '/news/DL4ALL NYSC CDS group.jpg',
    facebookUrl: '',
  },
  {
    date: '21st May 2025',
    title: 'BICTDA and Development Hub are sparking innovation in Borno State! The 2-day workshop for SMEs and startups is a great initiative to drive growth and progress. Wishing all participants a productive and insightful experience!',
    caption: `The BICTDA (Borno Innovation and Communication Technology Development Agency) and the Development Hub are leading a dynamic initiative to foster innovation in Borno State! This engaging two-day workshop focuses on empowering small and medium enterprises (SMEs) and startups, providing them with the tools and knowledge necessary to thrive in today's competitive market. Participants can look forward to a variety of enriching activities, including hands-on workshops, insightful panel discussions featuring industry experts, and ample networking opportunities to connect with fellow entrepreneurs. Attendees will explore strategies for growth, learn about emerging technologies, and share experiences that can spark new collaborations. We wish everyone a productive and enlightening experience that fuels creativity and paves the way for future success!`,
    image: '/news/BICTDA and Development Hub.jpg',
    facebookUrl: '',
  },
  {
    date: '18th May 2025',
    title: 'GSM Village Visits BICTDA',
    caption: `The new leadership of GSM Village paid a courtesy visit to the Borno State Information and Communication Technology Development Agency (BICTDA) to strengthen digital growth partnerships. During the visit, the Chairman of GSM Village expressed gratitude for BICTDA's contributions and emphasized the importance of continued collaboration to drive digital innovation. He stated that sustained partnership would empower the digital economy and foster growth.

Dr. Mustapha A. Tijjani, a Board Member of Bictda also encouraged GSM Village to tap into digital skills and innovation opportunities, highlighting BICTDA's commitment to collaborative development. Engr. Wanori FNSE reaffirmed BICTDA's dedication to working closely with GSM Village, aligning with the Borno State 25-Year Development Plan for a digitally transformed economy.`,
    image: '/news/leadership of GSM.jpg',
    facebookUrl: '',
  },
  {
    date: '12th May 2025',
    title: 'Second quarterly meeting',
    caption: `The Borno State Information and Communication Technology Development Agency (BICTDA) has commenced its second quarterly meeting, which is currently ongoing. In attendance are , the Board Chairman, Dr. Mohammed Idris Yelwa, Executive Secretary, Engr. Muhammad Ahmad Kabir Wanori and all board members.`,
    image: '/news/Second quarterly meeting.jpg',
    facebookUrl: '',
  },
  {
    date: '7th May 2025',
    title: 'NADPA-RAPDP 2025 CONFERENCE OFFICIALLY OPENS IN ABUJA AS NIGERIA LAUNCHES VIRTUAL PRIVACY ACADEMY',
    caption: `The 8th Annual Conference and General Meeting of the Network of African Data Protection Authorities (NADPA-RAPDP) has officially kicked off in Abuja! The event was declared open by Vice President Kashim Shettima, ably represented by Senator Ibrahim Hassan Hadejia, Deputy Chief of Staff to the President.

A major highlight was the launch of the Virtual Privacy Academy by the Honourable Minister of Communications, Innovation and Digital Economy, Dr. ’Bosun Tijani an exciting new platform to educate Africans on data protection and digital privacy rights!

Over 2,000 participants are attending, including, heads of Data Protection Authorities, international dignitaries, policymakers, tech leaders as NITDA, GALAXY BACKBONE, NIGCOMSAT and sub nationals tech leaders. ZITDA, BICTDA, Bauchi bureau for ICT, KATSINA ICT, KANO AND KADUNA among others and civil society champions.

Dr. Vincent Olatunji, National Commissioner/CEO of the Nigeria Data Protection Commission (NDPC), warmly welcomed all delegates and reaffirmed Nigeria’s commitment to digital rights, data protection, and regional collaboration.

The Chairperson of NADPA-RAPDP, Iro Adamou (represented by Kenya’s Commissioner Ms. Immaculate Kassit), emphasized the need for unified regulations and partnerships to ensure Africa’s digital sovereignty.

From Goodwill messages to thought leadership, the conference marks a bold step forward in shaping Africa’s digital future—safer, smarter, and more privacy-aware!`,
    image: '/news/RAPDP 2025 CONFERENCE.jpg',
    facebookUrl: '',
  },
  {
    date: '19th April 2025',
    title: 'BICTDA Hosts Two-Day Intensive Digital Marketing Training for Young Underserved Women in Borno',
    caption: `The Borno State Information and Communication Technology Development Agency (BICTDA) recently organized a transformative two-day intensive digital marketing training program for young underserved women in Borno. The event brought together esteemed dignitaries, partners, and 50 participants who gained valuable insights and skills in digital marketing.

In his Welcome Address, Engr. Mohammed Kabir Wanori FNSE emphasized the agency's commitment to fostering digital inclusion and empowering women: The BICTDA boss warmly welcomed the dignitaries to the groundbreaking digital marketing training program, emphasized the commitment of BICTDA to bridging the digital divide and empowering women with the skills needed to thrive in the digital economy. He expressed his appreciation to Her Excellency Dr. Fatima Babagana Umara Zulum and the Ministry of Women Affairs for their support and said he has no doubt that this training will be a transformative experience for our participants.

In her Keynote Address, Dr. Hauwa Mai Musa, Special Adviser to His Excellency on Women Affairs, said "Today's gathering is to empower young women with digital skills that will open doors to new opportunities. As we strive to build a more inclusive society, initiatives like this are crucial in unlocking the potential of women and girls. I commend BICTDA for their dedication to promoting digital literacy and entrepreneurship among women. I urge our participants to seize this opportunity and become agents of change in their communities."

Addressing the gathering, Engr. Hajju Gazalli, Chairperson of the Association of Professional Women Engineers of Nigeria (APWEN), Borno Chapter, emphasized the role of digital skills in driving innovation:
"As women engineers, we understand the importance of digital skills in driving innovation and economic growth. This training is a testament to the power of collaboration and the commitment to empowering women. We are proud to partner with BICTDA on this initiative and look forward to seeing the impact it will have on the lives of these young women. I encourage our participants to leverage this opportunity and become leaders in their chosen fields."

Notable Dignitaries in Attendance
The training was attended by several notable dignitaries, including:
- Engr. Mohammed Kabir Wanori FNSE, Executive Secretary of BICTDA
- Dr. Hauwa Mai Musa, Special Adviser to His Excellency on Women Affairs
- Engr. Hajju Gazalli, Chairperson of APWEN, Borno Chapter
Their presence demonstrates the significance of the initiative and the collaborative effort to promote digital literacy among women.

Empowering Young Women through Digital Skills
This training is expected to have a lasting impact, enabling participants to contribute meaningfully to their communities' economic development and achieve financial independence. By investing in the potential of these young women, BICTDA and its partners are fostering economic growth and promoting digital inclusion in the region.`,
    image: '/news/Two-Day Intensive Digital Marketing.jpg',
    facebookUrl: '',
  },
  {
    date: '20th March 2025',
    title: 'The Borno State Information and Communication Technology Development Agency (BICTDA) is proud to celebrate its one-year anniversary!',
    caption: `Over the past year, we have worked tirelessly to promote ICT development in Borno State, driving growth, innovation, and transformation.

We are grateful for the support of our partners, stakeholders, and the people of Borno State.

As we mark this milestone, we reaffirm our commitment to continuing our mission to make ICT a driving force for economic development and social progress in Borno State.

Happy Anniversary BICTDA!`,
    image: '/news/celebrate its.jpg',
    facebookUrl: '',
  },
  {
    date: '16th March 2025',
    title: 'BORNO STATE GSM VILLAGE ASSOCIATION PAYS COURTESY VISIT TO BICTDA, SEEKS PARTNERSHIP FOR SUSTAINABLE DEVELOPMENT',
    caption: `The leadership of the Borno State GSM Village Association, led by its Chairman, Alhaji Mohammed Saleh, and other executive members, recently paid a courtesy visit to the headquarters of the Borno State Information and Communication Technology Development Agency (BICTDA). They were warmly received by the Executive Secretary of BICTDA, Engr. Mohammed Kabir Wanori FNSE, who expressed appreciation for their visit and acknowledged the crucial role the GSM Village plays in the state's digital economy and technological advancement.

The visit aimed to foster collaboration between the GSM Village Association and BICTDA, aligning with the state government's vision for technological innovation, digital empowerment, and economic growth. The delegation sought to familiarize themselves with BICTDA's activities and programs, exploring avenues for synergy to drive sustainable development for both the ICT sector and the broader economy of Borno State.

During the discussions, Alhaji Mohammed Saleh expressed satisfaction with the agency's impact at the grassroots level and praised Governor Babagana Umara Zulum for his foresight in establishing BICTDA and appointing Engr. Wanori as the Executive Secretary. He highlighted the significance of the GSM market in providing employment, facilitating digital communication, and enhancing entrepreneurship within the state. He emphasized that a structured partnership with BICTDA would offer training opportunities, infrastructural support, and policy frameworks to further enhance the productivity and professionalism of their members.

In response, Engr. Mohammed Kabir Wanori FNSE commended the Association for its contributions to the local ICT ecosystem and reiterated BICTDA’s commitment to fostering a digital transformation agenda inclusive of all stakeholders. He assured them of the agency’s readiness to work closely with the GSM Village to provide technical support, capacity-building programs, and other interventions to strengthen their operations and improve service delivery.

The meeting concluded on a positive note, with both parties agreeing to develop a collaboration framework that includes digital literacy programs, business support initiatives, and potential integration into the state’s broader ICT policies.

This courtesy visit underscores the importance of public-private partnerships in driving sustainable development and ensuring that Borno State remains at the forefront of ICT advancement in Nigeria.`,
    image: '/news/BORNO STATE GSM VILLAGE.jpg',
    facebookUrl: '',
  },
  {
    date: '1st March 2025',
    title: 'Nigerian Society of Engineers, Maiduguri Branch, Partners with BICTDA to Boost Engineering Capacity in Borno State',
    caption: `Maiduguri, Borno State, In a landmark move to advance engineering excellence and digital innovation, the Nigerian Society of Engineers (NSE), Maiduguri Branch, recently paid a courtesy visit to the Borno State Information and Communication Technology Development Agency (BICTDA).

The visit, led by Branch Chairman Engr. M.B. Bashir FNSE, underscored a shared commitment to fostering collaboration, capacity building, and technological advancement in the state.

The Key Objectives of the Visit includes:
Strengthening Collaboration: The NSE sought partnership opportunities with BICTDA to enhance office infrastructure and engineering skills among members.
The delegation congratulated Engr. Mohammed Kabir Wanori FNSE on his appointment as BICTDA Executive Secretary and lauded his transformative contributions to the agency.
A formal request was made for BICTDA to provide digital technology training programs for young engineers, aimed at boosting their professional competitiveness in a tech-driven economy.
While Commending the state government efforts, Engr. Bashir praised Governor Babagana Umara Zulum FNSE, mni, CON, for his visionary leadership, highlighting investments in critical infrastructure, revitalization of state institutions, and establishment of new federal entities.
He emphasized the Governor’s alignment with excellence, which has positioned Borno as a model for development in Nigeria’s Northeast.

Celebrating Engr. Wanori’s Legacy
Engr. Wanori was celebrated for his pioneering role in deploying satellite and communication systems across the Northeast and his tenure as Commissioner in key state ministries.
His leadership in NSE’s North East Development Committee and Regional Development Committee was also acknowledged as instrumental to regional progress.
In response, Engr. Wanori pledged BICTDA’s full support, stressing the importance of interagency collaboration for statewide growth.
Demonstrating immediate goodwill, he donated a state-of-the-art projector to the NSE Maiduguri Branch to enhance training and outreach programs.

Forwarding Momentum, Engr. Bashir affirmed that the partnership would accelerate research, development, and innovation, directly contributing to Borno’s socio-economic goals.
Both parties expressed optimism about future initiatives, including digital upskilling for engineers and leveraging technology for sustainable development.

The NSE promotes engineering excellence, professional development, and ethical standards.
The Maiduguri Branch actively engages in initiatives to address local challenges through engineering solutions.
The Borno State Information and Communication Technology Development Agency drives ICT adoption, digital literacy, and innovation to position Borno as a leader in technology-driven development.

In conclusion,
As a testament to their shared commitment, the Nigerian Society of Engineers (NSE) Maiduguri Branch and the Borno State Information and Communication Technology Development Agency (BICTDA) signed a Memorandum of Understanding (MoU) to formalize their partnership.
This landmark agreement marks the beginning of a fruitful collaboration that will drive engineering excellence, digital innovation, and sustainable development in Borno State.
With this partnership, the NSE and BICTDA are poised to make a lasting impact on the state’s socio-economic landscape, and we look forward to witnessing the transformative outcomes of this collaboration.`,
    image: '/news/Nigerian Society of Engineer.jpg',
    facebookUrl: '',
  },
  {
    date: '24th February 2025',
    title: 'BICTDA Drives Digital Transformation in Borno State: A New Era of Opportunity.',
    caption: `In a bold move to bridge the digital divide and foster economic growth, the Borno State Government under the able and dynamic leadership of Engr Prof Babagana Umara Zulum FNSE mni CON has established 22 digital literacy centres across the state. Today, the Executive Secretary of BICTDA visited the newly constructed Kaga Local Government Digital Literacy Centre in Benishiek in preparation of Commissioning to commemce full pledged training, marking a significant milestone in the agency's mission to transform Borno State into a digital hub.

Located in the heart of Kaga Local Government Area, the centre is one of 22 digital literacy centres established by the government to promote digital inclusion and bridge the digital divide in rural communities. These centres are equipped with state-of-the-art technology and staffed by experienced trainers, providing citizens with access to cutting-edge digital resources and mentorship.

The establishment of these digital literacy centres is part of BICTDA's broader mandate to enhance the state's digital infrastructure and economy. The agency's strategy is built around three core pillars:
- Bridging the Digital Divide: Providing access to digital resources and promoting digital literacy among citizens
- Transforming Borno into a Regional Tech Hub: Fostering innovation and entrepreneurship in the tech sector, and attracting investments and talent to the state
- Leveraging ICT to Improve Government Services and Quality of Life: Using technology to enhance governance, education, healthcare, agriculture, and other sectors, and improve the overall quality of life for citizens

The Kaga Local Government Digital Literacy Centre has already enrolled 265 trainees, who have commenced their digital literacy training. This initiative is a significant step towards achieving the Sustainable Development Goals (SDGs) and promoting economic growth and development in Borno State.

As BICTDA continues to drive digital transformation in Borno State, the agency invites citizens, businesses, and stakeholders to join the journey. Together, we can build a digital future that is inclusive, innovative, and prosperous for all.

Get involved:
- Visit the BICTDA website to learn more about our initiatives and programmes
- Follow us on social media to stay up-to-date with the latest news and updates
- Contact us to explore partnership opportunities and collaborate on digital projects

Together, we can build a brighter digital future for Borno State!`,
    image: '/news/BICTDA Drives Digital.jpg',
    facebookUrl: '',
  },
  {
    date: '29th January 2025',
    title: 'BICTDA, led by the Chairman of the Board, Dr. Idriss Mohammed Yelwa, visited the headquarters of the Nigerian Society of Engineers (NSE) in Abuja.',
    caption: `The purpose of the visit was to express gratitude to the President of the Nigerian Society of Engineers and Chairman of the Council, Engr. Margaret Aina Oguntala, FNSE, for the appointment of Engr. Mohammed Kabir Wanori, FNSE, as the Chairman of the Regional Development Board of the Nigerian Society of Engineers.

During the visit, Dr. Yelwa commended Engr. Oguntala for the well-deserved appointment of Engr. Wanori, the Executive Secretary of BICTDA. He described Engr. Wanori as a dedicated, professional, and passionate individual who consistently delivers on his mandates. Dr. Yelwa also assured the Society of Engineers that the Regional Development Board, under Engr. Wanori's leadership, would achieve significant success.

The key responsibilities of the Regional Development Board include:
1. Assessing and identifying the unique infrastructural and developmental needs of each geopolitical zone.
2. Providing strategic guidance and recommendations on regional development initiatives to the NSE Council and relevant stakeholders.
3. Advocating for policies and programs that support sustainable regional development, leveraging engineering innovation and best practices.
4. Ensuring alignment with national and global development goals, such as the United Nations Sustainable Development Goals (SDGs).
5. Collaborating with stakeholders to develop and monitor implementation frameworks for regional development projects, among others.

Dr. Yelwa was accompanied by the Executive Secretary, Engr. Mohammed Kabir Wanori, FNSE; BICTDA's board member, Dr. Mustapha Abba Tijjani; and the Board's Secretary, Mr. Adewale Oluwalade.

NSE HQTRS ABUJA`,
    image: '/news/led by the Chairman of.jpg',
    facebookUrl: '',
  },
  {
    date: '28th January 2025',
    title: 'NGF, Bill, and Melinda Gates Foundation Collaborate on Digital Public Infrastructure and Intelligent Revenue Authority Index Tools',
    caption: `The Nigeria Governors' Forum (NGF), in collaboration with the Bill and Melinda Gates Foundation, successfully hosted a Validation Workshop for the Digital Public Infrastructure (DPI) and Intelligent Revenue Authority (IRA) Index Tools. The event took place at The Wells Carlton Hotel & Apartments in Abuja, bringing together representatives from ICT agencies across the nation.

The workshop aimed to validate the DPI and IRA Index Tools, designed to enhance the country's digital infrastructure and revenue collection processes. The tools are expected to improve the efficiency and effectiveness of public services, promote transparency, and increase revenue generation for state governments.

In his opening remarks, the rep of the Chairman of the NGF emphasized the importance of leveraging technology to drive governance and economic development in Nigeria. He expressed appreciation for the support of the Bill and Melinda Gates Foundation in promoting digital transformation in the country.

Representatives from the Bill and Melinda Gates Foundation reiterated their commitment to supporting Nigeria's development goals, particularly in the areas of digital infrastructure and revenue management.

The workshop featured presentations, panel discussions, and group sessions, providing a platform for participants to share experiences, challenges, and best practices in implementing digital solutions.

The event was attended by high-level officials from ICT agencies, state governments, and development partners. Participants praised the initiative, noting that the DPI and IRA Index Tools have the potential to transform the way government services are delivered and revenue is collected.

The NGF and the Bill and Melinda Gates Foundation have pledged to continue working together to support the implementation of the DPI and IRA Index Tools, ensuring that Nigeria's digital infrastructure and revenue management systems are world-class.

The validation was rounded up with befitting dinner to the participants.`,
    image: '/news/Melinda Gates Foundation.jpg',
    facebookUrl: '',
  },
  {
    date: '24th January 2025',
    title: 'Kaga Digital Literacy Center visit with BOAGGW',
    caption: `The Executive Secretary of the Borno State Information and Communication Technology Development Agency (BICTDA), Engr. Mohammed Kabir Wanori FNSE, and the Director General of the Borno State Agency for Great Green Wall (BOAGGW), Amb. Usman Aliyu, recently visited the Kaga Digital Literacy Center to assess its progress.

The visit was a key step in finalizing preparations for the center's upcoming commissioning. As part of the event, BOAGGW will lead a tree-planting initiative at the site, aimed at fostering environmental sustainability and complementing the center's digital empowerment goals.`,
    image: '/news/Kaga Digital Literacy Center visit with BOAGGW.jpg',
    facebookUrl: '',
  },
  {
    date: '22nd January 2025',
    title: 'BICTDA/RUWASA Embark on Digital Literacy Center Assessment Visits',
    caption: `As part of efforts to promote digital literacy and socio-economic development in Borno State, the Executive Secretary of Borno State Information and Communication Technology Development Agency (BICTDA) and the General Manager of RUWASA embarked on visits to assess the Digital Literacy Centers in Bama and Konduga.

In Bama, the duo was warmly received by the Chairman, who escorted them to the center's location for an on-the-spot assessment. In Konduga, the Secretary represented the local government during the visit, which aimed to evaluate the center's progress, identify areas for improvement, and discuss strategies for promoting digital literacy in the region.

These assessment visits demonstrate BICTDA's commitment to enhancing digital infrastructure and promoting ICT-driven development in Borno State.`,
    image: '/news/RUWASA Embark on Digital Literacy.jpg',
    facebookUrl: '',
  },
  {
    date: '21st January 2025',
    title: 'Enhancing Digital Literacy in Jere: BICTDA/RUWASA Joint Visitation',
    caption: `The Executive Secretary of Borno State Information and Communication Technology Development Agency (BICTDA), Engr. Kabir Wanori, FNSE, and the General Manager of RUWASA, Engr. Muhammad Musa Aliyu, FNSE, led a joint team to inspect the ongoing construction of the Jere Digital Literacy Center in Jere Local Government Area.

During the visit, team members from both BICTDA and RUWASA were in attendance to assess the project's progress, which has reached the foundation stage. Engr. Wanori also engaged in strategic discussions with the architect and engineers on site to re-evaluate the ongoing project and ensure its successful completion.

This collaborative effort demonstrates the commitment of BICTDA to promoting digital literacy and enhancing the socio-economic development of Jere Local Government Area.`,
    image: '/news/Literacy in Jere BICTDA RUWASA Joint.jpg',
    facebookUrl: '',
  },
  {
    date: '18th January 2025',
    title: 'His Excellency Prof.Babagana Umara Zulum CON,min,Fnse Honors UNDP Resident Representative at Commissioning of Monguno Digital Literacy Center',
    caption: `On January 17, 2025, His Excellency Professor Babagana Umara Zulum, CON, MIN, FNSE, honored the UNDP Resident Representative to Nigeria, Ms. Elsie Attafuah, by inviting her to commission the Monguno Digital Literacy Center. The governor welcomed dignitaries, including the German Ambassador to Nigeria, Egyptian Ambassador to Nigeria, and other esteemed guests, to the launch.

During the ceremony, Engineer Mohammed Ahmed Kabir Wanori, Executive Secretary, led the tour of the facility, showcasing its state-of-the-art equipment and innovative learning spaces. Governor Zulum praised the Executive Secretary's dedication and commended the students to persevere, emphasizing the importance of digital literacy in today's technology-driven world.

The UNDP Resident Representative to Nigeria, Ms. Elsie Attafuah, also shared words of wisdom with the students, inspiring them to make the most of the opportunities provided by the center. Furthermore, the German and Egyptian Ambassadors urged the students to put in extra effort, highlighting that the world is rapidly transitioning towards digitalization and that they must be prepared to thrive in this new landscape.

The governor also announced his commitment to supporting the students' educational journey, promising scholarships to those who complete their term. This gesture was met with enthusiasm and gratitude from the students and guests alike.

The commissioning of the Monguno Digital Literacy Center marks a significant milestone in the governor's efforts to promote digital inclusion and empower the youth in Borno State.`,
    image: '/news/Prof.Babagana Umara Zulum CON,min,Fnse Honors UNDP.jpg',
    facebookUrl: '',
  },
  {
    date: '16th November 2024',
    title: 'The Nigerian Communications Commission (NCC) recently hosted a meeting with the Borno Information Communication Technology Development Agency (BICTDA) to discuss updates on the NCC Digital Innovation Hub in Maiduguri. The leadership of the BICTDA was warmly received by the Director of Special Projects at the NCC.',
    caption: `This meeting highlights the NCC's commitment to promoting digital innovation and entrepreneurship across Nigeria. As the independent regulatory authority for the telecommunications industry, the NCC plays a crucial role in fostering growth and development in the sector.

The NCC's Digital Innovation Hub initiative aims to provide a platform for startups, innovators, and entrepreneurs to develop and showcase their ideas. By collaborating with BICTDA, the NCC seeks to promote digital inclusion and bridge the technology gap in underserved regions like Maiduguri.

Some of the key areas of focus for the NCC's Digital Innovation Hub include:
Digital Skills Development: Providing training and capacity-building programs for young Nigerians in emerging technologies like AI, blockchain, and cybersecurity.
Startup Support: Offering funding, mentorship, and incubation services to innovative startups and entrepreneurs.
Research and Development: Collaborating with academia and industry stakeholders to develop solutions addressing Nigeria's unique challenges.

These initiatives align with the NCC's strategic vision to leverage telecommunications and information communication technology (ICT) for Nigeria's economic growth and development .`,
    image: '/news/The Nigerian Communications.jpg',
    facebookUrl: '',
  },
  {
    date: '21st November 2024',
    title: "BICTDA Celebrates Engr. Wanori's Presidential Merit Award 2024",
    caption: `The Nigerian engineering community gathered to honor Engr. Mohammed Ahmed Kabir Wanori, FNSE, Executive Secretary of Borno State Information and Communication Technology Development Agency (BICTDA), as he received the esteemed Presidential Merit Award 2024 at the National Engineering Conference in Abuja.

This prestigious recognition acknowledges his outstanding contributions to the field of engineering, showcasing his remarkable dedication and expertise. As one of only 22 exceptional engineers to receive this merit, Engr. Wanori's achievement solidifies his position as a leader in the engineering community.

His tireless efforts have inspired countless individuals, and his work continues to have a profound impact on society.

We in BICTDA celebrate your achievement, Sir. Congratulations once again!`,
    image: "/news/BICTDA Celebrates Engr. Wanori's.jpg",
    facebookUrl: '',
  },
  {
    date: '26th December 2024',
    title: "The Borno State Information and Communication Technology Development Agency (BICTDA) has held its first Board meeting, marking a significant milestone in the agency's journey.",
    caption: `The meeting took place at the BICTDA office, with key stakeholders in attendance, including the Chairman of the Board, Dr. Mohammed Yelwa, the Executive Secretary, Engr. Mohammed Ahmed Kabir Wanori FNSE, and Dr. Mustapha Tijjani, Engr. Mohammed Wajiro, Zannah Lawan Ajimi, and representatives from the Ministry of Education, Ministry of Justice, Office of the Governor, Nigerian Society of Engineers, Standard Organization of Nigeria, and Nigeria Computer Society, as well as other board members who joined online. 

This meeting aligns with the Ten-Pack Agenda of His Excellency Professor Babagana Umara Zulum FNSE, which prioritizes the development of Borno State through strategic initiatives. The agenda focuses on areas such as education, healthcare, infrastructure, and economic empowerment. 

The meeting pave way for BICTDA to implement its strategic roadmap plan and drive development in Borno State.`,
    image: '/news/first Board meeting.jpg',
    facebookUrl: '',
  },
  {
    date: '26th December 2024',
    title: 'BICTDA Receives Wema Bank Team, Strengthens Collaboration in Digital Literacy Training',
    caption: `Maiduguri, Borno State - The Borno State Information Technology Development Agency (BICTDA) has received a team from Wema Bank, led by Mr Tumde. O, the Executive director of the bank to strengthen collaboration in digital literacy training and commend the bank for training 4,000 Borno youths.

The team, which included Mrs Aisha Musa the regional manager, BG Kolomi and few others was received by the Executive Secretary of BICTDA, Engr. Mohammed Kabir Wanori, FNSE, and other top officials of the agency.

During the meeting, the Wema Bank team commended BICTDA for its efforts in promoting digital literacy in Borno State and expressed their commitment to supporting the agency's initiatives.

In his remarks, Engr. Wanori thanked Wema Bank for its support and partnership in promoting digital literacy in Borno State. He particularly commended the bank for training 4,000 Borno youths, which he described as a significant contribution to the state's human capital development.

"We appreciate Wema Bank's commitment to supporting our digital literacy initiatives," Engr. Wanori said. "The training of 4,000 Borno youths is a significant milestone, and we look forward to continuing our partnership with Wema Bank to promote digital literacy and economic development in Borno State."

The meeting ended with a commitment to strengthen collaboration between BICTDA and Wema Bank in promoting digital literacy training and economic development in Borno State.`,
    image: '/news/BICTDA Receives Wema Bank.jpg',
    facebookUrl: '',
  },
  {
    date: '27th December 2024',
    title: 'BORNO STATE WITNESSES DIGITAL REVOLUTION AS 4,000 YOUTHS GRADUATE IN DIGITAL SKILLS INNOVATION UNDER FGN /ALAT PROJECT.',
    caption: `Maiduguri; In a significant boost to digital literacy and entrepreneurship in Borno State, 4,000 youths have graduated in digital skills innovation under the Federal Government's FGN ALAT project, implemented by Wema Bank PLC in collaboration with the Borno State Information Technology Development Agency (BICTDA).

The graduation ceremony, which took place in Maiduguri, was attended by Barr. Fannami, the Head of Service, representing His Excellency the Executive Governor of Borno State. The program was a huge success, lasting two hours and receiving full support from the Board of BICTDA.

In his goodwill message, the Executive Secretary of BICTDA Engr Kabir Mohammed Wanori FNSE emphasized the importance of digital skills innovation and entrepreneurship which aligns perfectly with His Excellency's 25-year strategic plan and 10-pack agenda focused on human capital development in Borno State, and congratulated the graduates on their achievement.

The FGN ALAT project is a strategic partnership between Wema Bank and the Federal Government of Nigeria, aimed at equipping young minds with versatile digital skills and opportunities. The project provides training in areas such as software engineering, product management, business analysis, cloud computing, and product design.

In conclusion, the graduation of 4,000 youths in digital skills innovation is a testament to the visionary leadership of His Excellency, Prof. Babagana Umara Zulum, the Executive Governor of Borno State. His foresight in establishing the Borno State Information Technology Development Agency (BICTDA) has facilitated this remarkable achievement, positioning Borno State as a hub for digital innovation and entrepreneurship in Nigeria.`,
    image: '/news/BORNO STATE WITNESSES DIGITAL REVOLUTION.jpg',
    facebookUrl: '',
  },
  {
    date: '28th December 2024',
    title: 'BICTDA Board Members Conduct Oversight Visit to Magumeri and Gubio Digital Literacy Centers',
    caption: `Magumeri/Gubio, Borno State – The Board of the Borno State Information and Communication Technology Development Agency (BICTDA) paid an oversight visit to the Digital Literacy Centers in Magumeri and Gubio as part of their commitment to enhancing digital literacy across the state.

The delegation, led by the Board Chairman Dr. Idris yelwa, alongside Engr. Mohammed Ahmed Kabir Wanori Executive Secretary of BICTDA, engaged instructors and participants in both centers to assess the learning environment and gather feedback on how to improve the quality of education. The Board expressed their satisfaction with the impressive turnout of participants, emphasizing the centers' positive impact on digital literacy in the region.

During the engagement, instructors highlighted ongoing successes and areas needing support, while participants shared their experiences and aspirations. In response, the Board pledged continuous support to strengthen the centers’ capacity and resources.

The delegation also called on local government stakeholders to intensify efforts in sensitizing youth and out-of-school children to enroll massively in the program, recognizing their crucial role in driving grassroots awareness and participation.

Other Board members who participated in the visit included Hon. Zannah Lawan Ajimi, Engr. Mohammed Aji Wajiro, Ali Mohammed, and Mr. Richard Malgwi, alongside team members from the agency. The visit reaffirmed BICTDA’s dedication to fostering a digitally literate society and bridging the digital divide in Borno State.

The Magumeri and Gubio centers are part of BICTDA’s broader initiative to provide digital skills training, aimed at empowering communities and driving socio-economic development through technology.`,
    image: '/news/BICTDA Board Members Conduct.jpg',
    facebookUrl: '',
  },
  {
    date: '3rd December 2024',
    title: 'BORNO STATE MAKES GROUNDBREAKING PRESENTATION AT NATIONAL COUNCIL FOR COMMUNICATION, INNOVATION, AND DIGITAL ECONOMY MEETING.',
    caption: `In a significant step towards harnessing the power of Artificial Intelligence (AI) for sustainable development, Borno State, represented by the Borno State Information and Communication Technology Agency (BICTDA), successfully presented a memo to the National Council for Communication, Innovation, and Digital Economy in Makurdi.

The memo, presented by Engr Mohammed Kabir Wanori FNSE, Executive Secretary of BICTDA, highlighted the potential of AI-driven solutions to transform critical sectors such as agriculture, education, security, and healthcare delivery in Borno State.

The National Digital Economy Policy and Strategy (NDEPS) aims to reposition Nigeria's economy to take advantage of digital technologies, focusing on key areas including digital infrastructure, digital literacy, and digital entrepreneurship.

The National Council for Communication, Innovation, and Digital Economy plays a crucial role in shaping Nigeria's digital economy, and the Council's annual meeting provides a platform for stakeholders to discuss and shape the country's digital transformation agenda.

The highlight of the ceremony included peer review presentations by states, courtesy calls, and other events. This development marks a significant milestone in Borno State's journey towards leveraging AI for sustainable development.`,
    image: '/news/BORNO STATE MAKES GROUNDBREAKING.jpg',
    facebookUrl: '',
  },
  {
    date: '5th December 2024',
    title: 'BORNO STATE GOVERNMENT RECEIVES ICT HUMAN CAPITAL DEVELOPMENT AWARD 2024 AT NATIONAL COUNCIL OF COMMUNICATION AND DIGITAL ECONOMY',
    caption: `Gov. Prof. Babagana Umara Zulum, has received the prestigious ICT Human Capital Development Award for 2024. This award recognizes his outstanding efforts in promoting human capital development, particularly in the area of Information and Communication Technology (ICT).

The award was presented at the National Council of Communication and Digital Economy Summit in Makurdi, Benue State. Engineer Mohammed Kabir Wanori, Executive Secretary of the Borno State Information and Communication Technology Development Agency (BICTDA), received the award on behalf of the governor.

Notably, Borno State was among the top three states selected for this award, out of 21 states that contested. This achievement is a testament to Governor Zulum's commitment to driving digital inclusion and economic growth in the state.

The governor's support for BICTDA has been instrumental in driving the digital revolution in Borno State. Despite the agency's recent establishment, adequate infrastructure is already in place, providing a solid foundation for digital growth and development.

This award acknowledges Governor Zulum's dedication to promoting human capital development, digital inclusion, and economic growth in Borno State. His efforts have paved the way for the state to become a hub for digital innovation and entrepreneurship, creating opportunities for citizens to thrive in the digital economy.`,
    image: '/news/BORNO STATE GOVERNMENT RECEIVES.jpg',
    facebookUrl: '',
  },
  {
    date: 'March 16th 2024',
    title: 'Commissoner for Education led Executive Secretary BICTDA on a working visit to Magumeri, Gubio and Damasak Local Government.',
    caption: `ICT centers to be Commissioned and made operational.
Commissioner of Education, Science,Technology and Innivation Engr. Lawan Abba Wakilbe and the Executive Secretary of BICTDA Engr. Mohammed Ahmed Kabir Wanori went on a visit to Magumeri, Gubio, and Mobbar Local Government areas.
During the visit, they inspected new ICT centers that are soon to be operational. The Commissioner and his team were welcomed by the local Government Chairman of Gubio and Damasak and conducted inspections at various educational facilities, including schools and teachers' quarters in the towns. The visit aimed to assess the progress of ongoing projects and ensure the readiness of the ICT centers for commissioning.`,
    image: '/news/Commissoner for Education.jpg',
    facebookUrl: '',
  },
  {
    date: '2nd July 2025',
    title: 'BICTDA Kicks Off Intensive Internship Program to Foster Tech Skills and Humanitarian Innovation in Maiduguri',
    caption: `The Borno State Information and Communication Technology Development Agency (BICTDA) has officially launched its intensive internship program, aimed at empowering students with critical digital skills and hands-on experience in humanitarian technology solutions. This strategic initiative is designed to build capacity in Python programming, web design, and technology incubation, while offering field-based exposure to reporting platforms used across government, education, and humanitarian sectors.

The program is a flagship component of His Excellency Governor Babagana Umara Zulum’s 25-Year Development Plan and aligns with BICTDA’s core mandate to bridge the digital divide and position Borno State as a leading technology hub in the region.

The inaugural onboarding session was held with the Executive Secretary of BICTDA, Engr. Kabir Mohammed Wanori, FNSE, who delivered a powerful address emphasizing the importance of capacity building within the agency and the broader vision of human capital development. He encouraged interns to fully utilize the tools and resources provided by the agency, stressing their potential to significantly enhance both personal and institutional performance.

The program will run in rotating cohorts, with four distinct groups of students undergoing immersive training sessions structured around three core thematic areas:

1. Python Programming and Web Design
Facilitated by Mr. Abdulwarith Ibrahim Wala, this module introduces students to Python—a versatile programming language—alongside the foundational tools of web development such as HTML, CSS, and JavaScript. The goal is to equip interns with the technical know-how to build modern web solutions.

2. Founders Forge (Incubator/Accelerator Program)
Led by Daniel Dibal and Ms. Amina Mustapha, this track is designed to ignite entrepreneurial thinking. Participants will learn how to transform ideas into viable tech-based solutions using tools such as the Business Model Canvas, with a focus on sustainability and social impact.

3. RMS Field Experience
Under the guidance of Mr. Shedrack Bata Joel, this hands-on module will expose students to real-life applications of technology in addressing humanitarian challenges in Maiduguri and surrounding communities. Interns will engage with reporting platforms and simulate their use in real-time scenarios, fostering both problem-solving and critical thinking skills.

This initiative represents a major step forward in BICTDA’s commitment to nurturing a vibrant, future-ready tech ecosystem in Borno State. By combining rigorous technical training with socially impactful field experience, BICTDA is not only equipping young people with relevant digital skills but also preparing them to become innovative problem-solvers and change agents within their communities.`,
    image: '/news/BICTDA Kicks Off.jpg',
    facebookUrl: '',
  }
];

const getExcerpt = (caption: string) => {
  if (!caption) return '';
  const paraBreak = caption.indexOf('\n\n');
  if (paraBreak !== -1) return caption.slice(0, paraBreak) + '...';
  if (caption.length > 200) return caption.slice(0, 200) + '...';
  return caption;
};

const parseDate = (dateStr: string) => {
  // Try to parse common formats: '28th June 2025', '2nd July 2025', 'March 16th 2024', etc.
  // Remove ordinal suffixes (st, nd, rd, th)
  const cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)/gi, '$1');
  // Try Date.parse first
  let d = Date.parse(cleaned);
  if (!isNaN(d)) return d;
  // Try swapping day and month if needed
  const parts = cleaned.match(/(\d{1,2}) ([A-Za-z]+) (\d{4})/);
  if (parts) {
    return Date.parse(`${parts[2]} ${parts[1]}, ${parts[3]}`);
  }
  // Fallback: try just the year
  const year = cleaned.match(/(\d{4})/);
  if (year) return Date.parse(`Jan 1, ${year[1]}`);
  return 0;
};

const LatestNews: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  // Sort newsPosts by date descending (newest first)
  const sortedPosts = [...newsPosts].sort((a, b) => parseDate(b.date) - parseDate(a.date));
  return (
    <section className="py-8 min-h-screen bg-gradient-to-r from-green-300/40 via-green-100/60 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-8 mt-2 max-w-xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-bictda-dark mb-2 tracking-tight text-center" style={{letterSpacing: '-0.02em'}}>
            Latest News
          </h1>
          <div className="w-20 h-1 bg-bictda-dark rounded-full mb-0" style={{marginTop: '0.25rem'}}></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.map((post, idx) => (
            <Dialog key={idx} open={openIdx === idx} onOpenChange={open => setOpenIdx(open ? idx : null)}>
              <Card className="flex flex-col h-full shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white/90 border-0 rounded-2xl overflow-hidden">
                {post.image && (
                  <img src={post.image} alt={post.title || 'News'} className="w-full h-56 object-cover rounded-t-2xl" />
                )}
                <CardHeader className="flex-1 pb-2">
                  <Badge variant="info" className="mb-2 w-fit bg-bictda-accent/10 text-bictda-accent font-semibold px-3 py-1 rounded-full text-xs shadow-none">{post.date}</Badge>
                  {post.title && <CardTitle className="text-lg font-bold text-bictda-dark mb-2 leading-tight line-clamp-2">{post.title}</CardTitle>}
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="text-bictda-dark font-medium mb-4 whitespace-pre-line text-sm leading-relaxed line-clamp-4">{getExcerpt(post.caption)}</div>
                  {(post.caption.length > getExcerpt(post.caption).length) && (
                    <DialogTrigger asChild>
                      <Button variant="default" size="sm" className="mt-auto self-start bg-bictda-accent hover:bg-bictda-dark text-white rounded-lg font-semibold shadow">Read More</Button>
                    </DialogTrigger>
                  )}
                </CardContent>
              </Card>
              <DialogContent className="max-w-2xl p-0 bg-white/95 rounded-2xl shadow-2xl">
                {post.image && (
                  <img src={post.image} alt={post.title || 'News'} className="w-full h-64 object-cover rounded-t-2xl mb-0" />
                )}
                <div className="p-6">
                  <DialogHeader className="mb-2">
                    <Badge variant="info" className="mb-2 w-fit bg-bictda-accent/10 text-bictda-accent font-semibold px-3 py-1 rounded-full text-xs shadow-none">{post.date}</Badge>
                    <DialogTitle className="text-2xl font-bold text-bictda-dark mb-2 leading-tight">{post.title}</DialogTitle>
                  </DialogHeader>
                  <DialogDescription asChild>
                    <div className="text-bictda-dark font-medium whitespace-pre-line text-base leading-relaxed">{post.caption}</div>
                  </DialogDescription>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews; 