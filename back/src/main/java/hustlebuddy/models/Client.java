package hustlebuddy.models;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

@Entity
public class Client {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Temporal(TemporalType.DATE)
	private Date birthday;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private AccountData accountData;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private PersonalData personalData;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private ClientInformations clientInformations;
	
	@NotNull
	private Boolean deleted = false;
	
	//Constructors
	
	public Client() {
		
	}

	public Client(Long id, Date birthday, AccountData accountData, PersonalData personalData,Boolean deleted, ClientInformations clientInformations) {
		this.id = id;
		this.birthday = birthday;
		this.accountData = accountData;
		this.personalData = personalData;
		this.clientInformations = clientInformations;
		this.deleted = deleted;
	}

	public Client(Date birthday, AccountData accountData, PersonalData personalData, Boolean deleted, ClientInformations clientInformations) {
		this.birthday = birthday;
		this.accountData = accountData;
		this.personalData = personalData;
		this.clientInformations = clientInformations;
		this.deleted = deleted;
	}

	//Getters and Setters
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public AccountData getAccountData() {
		return accountData;
	}

	public void setAccountData(AccountData accountData) {
		this.accountData = accountData;
	}

	public PersonalData getPersonalData() {
		return personalData;
	}

	public void setPersonalData(PersonalData personalData) {
		this.personalData = personalData;
	}

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}

	public ClientInformations getClientInformations() {
		return clientInformations;
	}

	public void setClientInformations(ClientInformations clientInformations) {
		this.clientInformations = clientInformations;
	}
	
	
	
	
}
