import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id='contact' className={styles.container}>
      <h1 className={styles.title}>Contact</h1>

      <form action='' className={styles.form}>
        <div className="formGroup">
         <label htmlFor='name' hidden >Name:</label>
         <input type='text' id='name' name='name' placeholder='Name' required />
        </div>
        <div className="formGroup">
         <label htmlFor='email' hidden >Email:</label>
         <input type='email' id='email' name='email' placeholder='Email' required />
        </div>
        <div className="formGroup">
         <label htmlFor='message' hidden >Message:</label>
         <textarea id='message' name='message' placeholder='Message' required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit"  />
      </form>

    </section>
  )
}

export default Contact