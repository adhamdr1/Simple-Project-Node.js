// test_api.js
// الكود ده بيحاكي (Simulate) إن في frontend بيبعت بيانات للسيرفر

async function testCreateEmployee() {
    console.log("⏳ Sending POST request...");

    try {
        const response = await fetch('http://localhost:3000/api/employees', {
            method: 'POST', // حددنا النوع POST
            headers: {
                'Content-Type': 'application/json' // بنقول للسيرفر إحنا باعتين JSON
            },
            body: JSON.stringify({
                name: "Adham Mohamed",
                email: "adham@melody.com",
                position: "Backend Developer",
                salary: 100000,
                department_id: 1 // تأكد إن رقم 1 ده موجود في جدول departments عندك
            })
        });

        const data = await response.json();
        
        if (response.ok) {
            console.log("✅ Success! Employee Created:");
            console.log(data);
        } else {
            console.log("❌ Failed:", data);
        }

    } catch (error) {
        console.error("❌ Error:", error.message);
    }
}

testCreateEmployee();